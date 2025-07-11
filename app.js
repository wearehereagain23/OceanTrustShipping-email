const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 9000
const nodemailer = require("nodemailer");
const path = require('path');



app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json());



const ff = path.join(__dirname, '/src')
app.use(express.static(ff));


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/src')
});



//  ADMIN   INVOICE


app.post('/admin/invoice.html', async (req, res) => {


    let info = req.body

    var transporter = nodemailer.createTransport({
        host: 'mail.assistin.online',
        secureConnection: true,
        port: 465,
        service: 'SMTP',
        auth: {
            user: "oceantrust@assistin.online",
            pass: "Deeshipping@2025"
        },
        from: "oceantrust@assistin.online",
    });

    const mail_option = {
        from: `oceantrust@assistin.online`,
        to: info.useremail,
        subject: "New Message From Oceantrust ",
        html:
            `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Template</title>
    <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml>
<![endif]-->
    <style type="text/css">
        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        .rollover span {
            font-size: 0px;
        }

        u+.body img~div div {
            display: none;
        }

        #outlook a {
            padding: 0;
        }

        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
        }

        a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors],
        #MessageViewBody a {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        @media only screen and (max-width:600px) {
            .es-m-p5r {
                padding-right: 5px !important
            }

            .es-m-p35t {
                padding-top: 35px !important
            }

            .es-m-p20r {
                padding-right: 20px !important
            }

            .es-m-p20t {
                padding-top: 20px !important
            }

            .es-p-default {}

            *[class="gmail-fix"] {
                display: none !important
            }

            p,
            a {
                line-height: 150% !important
            }

            h1,
            h1 a {
                line-height: 120% !important
            }

            h2,
            h2 a {
                line-height: 120% !important
            }

            h3,
            h3 a {
                line-height: 120% !important
            }

            h4,
            h4 a {
                line-height: 120% !important
            }

            h5,
            h5 a {
                line-height: 120% !important
            }

            h6,
            h6 a {
                line-height: 120% !important
            }

            .es-header-body p {}

            .es-content-body p {}

            .es-footer-body p {}

            .es-infoblock p {}

            h1 {
                font-size: 30px !important;
                text-align: left
            }

            h2 {
                font-size: 24px !important;
                text-align: left
            }

            h3 {
                font-size: 20px !important;
                text-align: left
            }

            h4 {
                font-size: 24px !important;
                text-align: left
            }

            h5 {
                font-size: 20px !important;
                text-align: left
            }

            h6 {
                font-size: 16px !important;
                text-align: left
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 24px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
                font-size: 24px !important
            }

            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
                font-size: 20px !important
            }

            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
                font-size: 16px !important
            }

            .es-menu td a {
                font-size: 14px !important
            }

            .es-header-body p,
            .es-header-body a {
                font-size: 14px !important
            }

            .es-content-body p,
            .es-content-body a {
                font-size: 14px !important
            }

            .es-footer-body p,
            .es-footer-body a {
                font-size: 14px !important
            }

            .es-infoblock p,
            .es-infoblock a {
                font-size: 12px !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
                text-align: right !important
            }

            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
                text-align: justify !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
                display: inline !important
            }

            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
                line-height: 0 !important;
                font-size: 0 !important
            }

            .es-spacer {
                display: inline-table
            }

            a.es-button,
            button.es-button {
                font-size: 18px !important;
                padding: 10px 20px 10px 20px !important;
                line-height: 120% !important
            }

            a.es-button,
            button.es-button,
            .es-button-border {
                display: inline-block !important
            }

            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
                display: block !important
            }

            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
                display: inline-block !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            .es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            .h-auto {
                height: auto !important
            }

            .es-m-w0 {
                width: 0px !important
            }

            .es-text-5950 .es-text-mobile-size-12,
            .es-text-5950 .es-text-mobile-size-12 * {
                font-size: 12px !important;
                line-height: 150% !important
            }

            .es-text-6595 .es-text-mobile-size-14.es-override-size,
            .es-text-6595 .es-text-mobile-size-14.es-override-size * {
                font-size: 14px !important;
                line-height: 150% !important
            }

            .es-text-3354 .es-text-mobile-size-14.es-override-size,
            .es-text-3354 .es-text-mobile-size-14.es-override-size * {
                font-size: 14px !important;
                line-height: 150% !important
            }

            .es-text-4628 .es-text-mobile-size-13.es-override-size,
            .es-text-4628 .es-text-mobile-size-13.es-override-size * {
                font-size: 13px !important;
                line-height: 150% !important
            }
        }

        @media screen and (max-width:384px) {
            .mail-message-content {
                width: 414px !important
            }
        }
    </style>
</head>

<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F6F6F6">
        <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f6f6f6"></v:fill> </v:background><![endif]-->
        <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
            <tr>
                <td valign="top" style="padding:0;Margin:0">
                    <table cellspacing="0" cellpadding="0" align="center" class="es-header" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                                    class="es-header-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                            <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                                <tr>
                                                    <td valign="top" class="esdev-mso-td" style="padding:0;Margin:0">
                                                        <table cellpadding="0" align="left" cellspacing="0"
                                                            class="es-left" role="none"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tr>
                                                                <td valign="top" align="center"
                                                                    style="padding:0;Margin:0;width:180px">

                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-m-w0 es-m-p5r" style="padding:0;Margin:0;width:20px">
                                                    </td>
                                                    <td valign="top" class="esdev-mso-td" style="padding:0;Margin:0">
                                                        <table cellspacing="0" cellpadding="0" align="right"
                                                            class="es-right" role="none"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0;width:360px">
                                                                    <table width="100%" cellspacing="0" cellpadding="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td align="right" class="es-m-p35t"
                                                                                style="padding:0;Margin:0;padding-top:25px">
                                                                                <h2 class="es-m-txt-r"
                                                                                    style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:29px;color:#333333">
                                                                                    <strong>INVOICE!!</strong>
                                                                                </h2>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                            <table cellspacing="0" cellpadding="0" class="esdev-mso-table" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                                                <tr>
                                                    <td valign="top" class="esdev-mso-td" style="padding:0;Margin:0">
                                                        <table cellspacing="0" cellpadding="0" align="left"
                                                            class="es-left" role="none"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                            <tr>
                                                                <td align="center" valign="top"
                                                                    style="padding:0;Margin:0;width:180px">
                                                                    <table cellpadding="0" width="100%" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td align="left" class="es-text-4628"
                                                                                style="padding:0;Margin:0;padding-top:20px">
                                                                                <h6 class="es-override-size es-text-mobile-size-13"
                                                                                    style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:16px;font-style:normal;font-weight:normal;line-height:19px;color:#333333">
                                                                                    <strong>Invoice From</strong>
                                                                                </h6>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="left" class="es-text-3354"
                                                                                style="padding:0;Margin:0;padding-top:10px">
                                                                                <h6 class="es-override-size es-text-mobile-size-14"
                                                                                    style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:19px;color:#0b94dd">
                                                                                    <strong>oceantrust ​</span></strong>
                                                                                </h6>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-m-w0 es-m-p20r" style="padding:0;Margin:0;width:20px">
                                                    </td>
                                                    <td valign="top" class="esdev-mso-td" style="padding:0;Margin:0">
                                                        <table cellspacing="0" cellpadding="0" align="right"
                                                            class="es-right" role="none"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0;width:360px">

                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                                    class="es-content-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;padding-top:25px;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Dear ${info.name},</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ​</p>

                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ​</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Your invoice number is #${info.code}</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ​</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Please see a list of things that are contained
                                                                        in the invoice</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ​</p>
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%"
                                                                        role="presentation">
                                                                   
                                                                        <tr>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:40px;border-style:solid;border-color:#333333">
                                                                                &nbsp;<p>Package</p>:${info.packagename}</td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:40px;border-style:solid;border-color:#333333">
                                                                                &nbsp;<p>Quantity</p>:${info.quantity}</td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:40px;width:273px;border-style:solid;border-color:#333333">
                                                                                &nbsp;<p>Description</p>:${info.description}</td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:40px;border-style:solid;border-color:#333333">
                                                                                &nbsp;<p>Weight</p>:${info.weight}</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellspacing="0" cellpadding="0" align="center" class="es-footer" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                                    class="es-footer-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px">
                                            <table cellspacing="0" cellpadding="0" align="right" class="es-right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" class="es-text-6595"
                                                                    style="padding:0;Margin:0">

                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%"
                                                                        role="presentation">
                                                                        <tr>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:32px;background-color:#0b94dd;width:106px;border-style:solid">
                                                                                <strong
                                                                                    class="es-text-mobile-size-14 es-override-size">Express
                                                                                    Delivery</strong>
                                                                            </td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:32px;background-color:#0b94dd;width:160px;border-style:solid">
                                                                                &nbsp;<strong
                                                                                    class="es-text-mobile-size-14 es-override-size">Second
                                                                                    Class Delivery</strong></td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:32px;width:223px;background-color:#0b94dd;border-style:solid">
                                                                                &nbsp;<strong
                                                                                    class="es-text-mobile-size-14 es-override-size">Third
                                                                                    Class Delivery</strong></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:39px;width:106px;border-style:solid">
                                                                                &nbsp;${info.exd}</td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:39px;width:160px;border-style:solid">
                                                                                &nbsp;${info.scd}</td>
                                                                            <td
                                                                                style="padding:0;Margin:0;height:39px;width:223px;border-style:solid">
                                                                                &nbsp;${info.tcd}</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                            <table width="100%" cellpadding="0" cellspacing="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" role="presentation" cellpadding="0"
                                                            cellspacing="0"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ${info.p1}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ${info.p2}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        ${info.p3}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
                                            <table width="100%" cellpadding="0" cellspacing="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table cellspacing="0" width="100%" role="presentation"
                                                            cellpadding="0"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        If you have any issues, please do not hesitate
                                                                        to reply to this email. Our customer support
                                                                        team is available 24/7 to assist you with any
                                                                        issue you may be having.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellspacing="0" cellpadding="0" align="center" class="es-footer" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"
                                    class="es-footer-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px"
                                    role="none">
                                    <tr>
                                        <td bgcolor="#ffffff" align="left"
                                            style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;background-color:#FFFFFF">
                                            <table width="100%" cellspacing="0" cellpadding="0" align="right"
                                                class="es-right" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table class="es-footer" cellspacing="0" cellpadding="0"
                                                            align="center" role="none"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                                                            <tr>
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <table class="es-footer-body"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                                                        cellspacing="0" cellpadding="0" align="center"
                                                                        role="none">
                                                                        <tr>
                                                                            <td align="left"
                                                                                style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:30px">
                                                                                <table width="100%" cellspacing="0"
                                                                                    cellpadding="0" role="none"
                                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                    <tr>
                                                                                        <td align="left"
                                                                                            style="padding:0;Margin:0;width:560px">
                                                                                            <table width="100%"
                                                                                                cellspacing="0"
                                                                                                cellpadding="0"
                                                                                                role="presentation"
                                                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                <tr>
                                                                                                    <td align="center"
                                                                                                        style="padding:0;Margin:0;padding-bottom:35px">
                                                                                                        <p
                                                                                                            style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">
                                                                                                            oceantrust ©
                                                                                                            2025 All
                                                                                                            Rights
                                                                                                            Reserved.
                                                                                                        </p>
                                                                                                        <p
                                                                                                            style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">
                                                                                                            &nbsp;Hermes
                                                                                                            House St
                                                                                                            John’s Road
                                                                                                            Tunbridge
                                                                                                            Wells Kent
                                                                                                            TN4 9UZ</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="padding:0;Margin:0">
                                                                                                        <table
                                                                                                            class="es-menu"
                                                                                                            width="100%"
                                                                                                            cellspacing="0"
                                                                                                            cellpadding="0"
                                                                                                            role="presentation"
                                                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                                            <tr
                                                                                                                class="links">
                                                                                                                <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px"
                                                                                                                    width="33.33%"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    <a target="_blank"
                                                                                                                        href=""
                                                                                                                        style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Visit
                                                                                                                        Us
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                                <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"
                                                                                                                    width="33.33%"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    <a target="_blank"
                                                                                                                        href=""
                                                                                                                        style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Privacy
                                                                                                                        Policy</a>
                                                                                                                </td>
                                                                                                                <td style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"
                                                                                                                    width="33.33%"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    <a target="_blank"
                                                                                                                        href=""
                                                                                                                        style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#999999;font-size:12px">Terms
                                                                                                                        of
                                                                                                                        Use</a>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>`
    }


    try {
        const info2 = await transporter.sendMail(mail_option);

        console.log("Email sent: ", info2);

        res.send("Email sent successfully!");


    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email.");
    }

});




app.listen(port, () => {
    console.log(`this project is working fine at http://localhost:${port}`)
});
