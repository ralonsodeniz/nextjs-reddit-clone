/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useCallback } from 'react';

import { uploadFiles } from '@/lib/uploadthing';
import { EN } from '@/locale/en';

import type EditorJS from '@editorjs/editorjs';
import type { MutableRefObject } from 'react';

export const useEditor = (editorRef: MutableRefObject<EditorJS | null>) => {
  const getEditorInstance = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default;
    const Header = (await import('@editorjs/header')).default;
    const Code = (await import('@editorjs/code')).default;
    const Embed = (await import('@editorjs/embed')).default;
    const Image = (await import('@editorjs/image')).default;
    const InlineCode = (await import('@editorjs/inline-code')).default;
    const LinkTool = (await import('@editorjs/link')).default;
    const Table = (await import('@editorjs/table')).default;

    if (!editorRef.current) {
      const editor = new EditorJS({
        data: { blocks: [] },
        holder: 'editorjs',
        inlineToolbar: true,
        onReady: () => {
          editorRef.current = editor;
        },
        placeholder: EN.components.forms.post.contentPlaceholder,
        tools: {
          code: Code,
          embed: Embed,
          header: Header,
          image: {
            class: Image,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  const [res] = await uploadFiles([file], 'imageUploader');

                  return {
                    file: {
                      url: res.fileUrl,
                    },
                    success: 1,
                  };
                },
              },
            },
          },
          inlineCode: InlineCode,
          linkTool: {
            class: LinkTool,
            config: { endpoint: '/api/editor/link' },
          },
          table: Table,
        },
      });
    }
  }, [editorRef]);

  return { getEditorInstance };
};
