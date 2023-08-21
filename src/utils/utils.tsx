function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
const getFileIcon = (extension: any) => {
  switch (extension) {
    case 'pdf':
      return 'file-pdf-o';
    case 'doc':
    case 'docx':
      return 'file-word-o';
    case 'xls':
    case 'xlsx':
      return 'file-excel-o';
    case 'ppt':
    case 'pptx':
      return 'file-powerpoint-o';
    case 'zip':
    case 'rar':
    case '7z':
      return 'file-archive-o';
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
      return 'file-image-o';
    default:
      return 'file-o';
  }
};

const dataSaver = (key: String, value: any) => {};
export {formatBytes, getFileIcon, dataSaver};
