﻿<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls"
    Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
    Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SiteViewerUserControl.ascx.cs"
    Inherits="AIA.Intranet.Infrastructure.WebParts.SiteViewer.SiteViewerUserControl" %>
<div class="box_3col_left height_box_2">
    <div class="menu">
        <h1>
            <asp:Literal ID="literalWebPartTitle" Text="Welcome to Group Operations" runat="server"></asp:Literal>
        </h1>
    </div>
    <div class="content scroll_a h_scroll_2">
        <h2>
            <asp:Literal ID="literalWebPartDescription" Text="Group Operations Welcome Note Mission Statement"
                runat="server"></asp:Literal>
        </h2>
        <h3>
            <asp:Literal ID="literalGroups" Text="Structure of Group Operations" runat="server"></asp:Literal>
        </h3>
        <ul class="link_department" id="ulDepartment" runat="server">
        </ul>
        <asp:Repeater ID="repeaterCommingUp" runat="server">
            <ItemTemplate>
                <div style="margin-bottom: 14px">
                    <asp:HyperLink ID="hyperLinkCommingUp" CssClass="button" NavigateUrl="#" runat="server"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>HyperLink</asp:HyperLink>
                </div>
            </ItemTemplate>
        </asp:Repeater>
    </div>
</div>

