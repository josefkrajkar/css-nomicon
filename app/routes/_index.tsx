import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'CSS-nomicon' },
    { name: 'description', content: 'App full of css secrets and spells' },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="flex h-full">
        <div className="w-1/2 p-4">
          <textarea
            className="w-full h-full p-2 bg-gray-800 text-white font-mono resize-none"
            placeholder="Enter your HTML here..."
            onChange={e => {
              const iframe = document.getElementById(
                'preview'
              ) as HTMLIFrameElement;
              if (iframe && iframe.contentWindow) {
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(e.target.value);
                iframe.contentWindow.document.close();
              }
            }}
          />
        </div>
        <div className="w-1/2 p-4">
          <iframe
            id="preview"
            className="w-full h-full bg-white"
            title="HTML Preview"
          />
        </div>
      </div>
    </div>
  );
}
