<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

<xsl:template match = "/">
    <html>
        <body>
            <h1 style = "color: rgb(23, 21, 56); font-family: sans-serif; text-align: center; margin: 20px 0 -9px 0;">Крутые вузы!</h1>
                <div style = "
                margin: 20px auto;
                border: 5px solid rgb(55, 86, 172);
                width: 870px;
                color: rgb(23, 21, 56);
                padding: 13px 13px 0px 13px;">
                <xsl:for-each select = "speciality/university">
                    <div style="font-size: 20px;
                    font-family: sans-serif;
                    display:block;
                    text-align:center;
                    border: 1px solid rgb(197, 164, 71);
                    margin-bottom: 13px;
                    border-collapse: collapse;
                    background-color: rgb(245, 245, 245);">
                        <div style = " 
                        padding: 3px;
                        border: inherit;
                        display: inherit;"><xsl:value-of select = "title"/></div>
    
                        <div style = "
                        padding: 3px;
                        border: inherit;
                        display: inherit;"><xsl:value-of select = "passingScore"/></div>

                        <div style = "
                        padding: 3px;
                        border: inherit;
                        display: inherit;"><xsl:value-of select = "recruitmentPlan"/></div>

                        <div style = "
                        padding: 3px;
                        border: inherit;
                        display: inherit;"><xsl:value-of select = "city"/></div>
                    </div>

                </xsl:for-each>
                </div>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>