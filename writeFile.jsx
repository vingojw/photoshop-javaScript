#target photoshop
app.bringToFront();

//写入任务操作
var strFile = new File( "e:\\test.txt");
//if (strFile.exists)
//{
    strFile.open ("e");
    //strFile.writeln(app.activeDocument.name);
    //strFile.writeln((nowTime.getMonth() +1).toString() + "月" + nowTime.getDate().toString() + "日");
    strFile.writeln('aaa');
    strFile.close();
//}
var folder = new Folder ("e:\\testScript");
folder.create(); //创建文件夹
/*

fileObj.open (mode[,type][,creator])
mode
	读
	r: (read) Opens for reading. If the file does not exist or cannot be found, the call
	fails.

	写 ，存在就覆盖内容，不存在就新建文件再写
	w: (write) Opens a file for writing. If the file exists, its contents are destroyed. If
	the file does not exist, creates a new, empty file.

	读写状态
	e: (edit) Opens an existing file for reading and writing.

	追加
	a: (append) Opens the file in Append mode, and moves the current position to
	the end of the file.
*/

