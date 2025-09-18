Imports System

Partial Public Class Naughty
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
        ' Show modal by default on initial load only (not on postbacks)
        If Not IsPostBack Then
            AgeModal.Visible = True
            BindHeroVideo()
            BindGallery()
        End If
    End Sub

    Protected Sub BtnConfirmAge_Click(ByVal sender As Object, ByVal e As EventArgs)
        ' Hide the 18+ modal when user confirms
        AgeModal.Visible = False
    End Sub

    Private Sub BindHeroVideo()
        ' Pick the highest-numbered hero file present (hero11..hero1) and render mp4 <source> tag
        Dim videoDir As String = Server.MapPath("~/aspnet/videos/")
        Dim chosenIndex As Integer = -1
        Dim available As New System.Collections.Generic.List(Of Integer)()

        For i As Integer = 1 To 11
            Dim p = System.IO.Path.Combine(videoDir, $"hero{i}.mp4")
            If System.IO.File.Exists(p) Then available.Add(i)
        Next
        If available.Count > 0 Then chosenIndex = available(available.Count - 1)

        Dim html As New System.Text.StringBuilder()
        If chosenIndex <> -1 Then
            Dim rel = $"videos/hero{chosenIndex}.mp4"
            html.AppendLine($"<source src=\"{rel}\" type=\"video/mp4\" />")
        End If

        HeroSources.Text = html.ToString()
        ' Attach data attributes for client-side controls (available list and current index)
        Dim availableCsv As String = String.Join(",", available)
        HeroVideo.Attributes("data-available") = availableCsv
        HeroVideo.Attributes("data-current") = If(chosenIndex = -1, "-1", chosenIndex.ToString())
    End Sub

    Private Sub BindGallery()
        ' Build list of gallery images photo2..photo11 if present
        Dim imgDir As String = Server.MapPath("~/aspnet/images/")
        Dim results As New System.Collections.Generic.List(Of String)()
        For i As Integer = 2 To 11
            Dim p = System.IO.Path.Combine(imgDir, $"photo{i}.jpeg")
            If System.IO.File.Exists(p) Then
                results.Add($"images/photo{i}.jpeg")
            End If
        Next

        GalleryRepeater.DataSource = results
        GalleryRepeater.DataBind()
    End Sub
End Class
