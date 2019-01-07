<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

<xsl:template match = "/">
    <html>
        <head>
            <link rel = "stylesheet" href = "myStyle.css"/>
        </head>
        <body>
            <table>
                <caption>Мои любимые одногрупнички!</caption>
                <tr><td>Фамилия</td><td>Имя</td><td>Дата рождения</td><td>Средний балл за первую сессию</td></tr>

                <xsl:for-each select = "classmates/student">
                <xsl:sort select = "birthDate"/>
                    <tr>
                    <td><xsl:value-of select = "surname"/></td>
                    <td><xsl:value-of select = "name"/></td>
                    <td><xsl:value-of select = "birthDate"/></td>
                    <xsl:choose>
                        <xsl:when test = "averageScore &lt; 5">
                            <td class = "badMark"><xsl:value-of select = "averageScore"/></td>
                        </xsl:when>

                        <xsl:when test = "averageScore = 5">
                            <td class = "goodMark"><xsl:value-of select = "averageScore"/></td>
                        </xsl:when>
                        
                        <xsl:otherwise>
                            <td><xsl:value-of select = "averageScore"/></td>
                        </xsl:otherwise>
                    </xsl:choose>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>
