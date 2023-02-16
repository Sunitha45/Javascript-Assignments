var i,j,k;
for(i=1;i<=3;i++)
{
    for(k=1;k<=(5-i);k++)
    {
        document.write("&nbsp");
    }
    for(j=1;j<=i;j++)
    {
        document.write("*");
    }
    document.write("<br/>");
}