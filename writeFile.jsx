#target photoshop
app.bringToFront();

//写入任务操作
var strFile = new File( "e:\\test.txt");
alert(strFile);
//if (strFile.exists)
//{
    strFile.open ("w");
    //strFile.writeln(app.activeDocument.name);
    //strFile.writeln((nowTime.getMonth() +1).toString() + "月" + nowTime.getDate().toString() + "日");
    strFile.writeln(1231);
    strFile.close();
//}

/*
r	只读模式。文件指针被放置在文件的开头。这是默认模式。
r+	读写模式。文件指针被放置在文件的开头。
w	只写模式。如果文件存在，则重写文件。如果文件不存在，则创建一个新文件用于写入。
w+	读写模式。如果文件存在，则重写已存在的文件。如果文件不存在，则创建一个新文件用于读写。
a	只写模式。如果文件存在，则文件指针被放置在文件的末尾。也就是说，文件是追加模式。如果文件不存在，则创建一个新文件用于写入。
a+	读写模式。如果文件存在，则文件指针被放置在文件的末尾。也就是说，文件是追加模式。如果文件不存在，则创建一个新文件用于读写。
*/