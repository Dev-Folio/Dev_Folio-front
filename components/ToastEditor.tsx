import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useRef, useEffect } from 'react';
import S3 from 'react-aws-s3-typescript';
import { v4 as uuidv4 } from 'uuid';

const ToastEditor = () => {
  const editorRef = useRef<Editor>(null);
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'], //<-- 이미지 추가 툴바
    ['code'],
    ['scrollSync'],
  ];

  const showContent = () => {
    if (!editorRef || !editorRef.current) return;
    const editorIns = editorRef.current.getInstance();
    const contentHtml = editorIns.getHTML();
    const contentMark = editorIns.getMarkdown();
    console.log(contentHtml);
    console.log(contentMark);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');

      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          const s3config = {
            bucketName: process.env.NEXT_PUBLIC_BUCKET_NAME as string,
            region: process.env.NEXT_PUBLIC_REGION as string,
            accessKeyId: process.env.NEXT_PUBLIC_ACCESSKEY as string,
            secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESSKEY as string,
          };
          const ReactS3Client = new S3(s3config);
          ReactS3Client.uploadFile(blob, uuidv4())
            .then((data) => callback(data.location, 'imageURL'))
            .catch((err) => (window.location.href = '/error'));
        });
    }
  }, []);

  return (
    <>
      <Editor
        ref={editorRef}
        initialValue="" // 글 수정 시 사용
        initialEditType="wysiwyg" // wysiwyg & markdown
        hideModeSwitch={true}
        height="500px"
        theme={''} // '' & 'dark'
        usageStatistics={false}
        toolbarItems={toolbarItems}
        plugins={[colorSyntax]}
      />

      <button onClick={showContent}>Write</button>
    </>
  );
};

export default ToastEditor;
