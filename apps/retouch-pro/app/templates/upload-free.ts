export const uploadFreeTemplate = `
<html>
  <body
    style='font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa;'
  >
    <div
      style='max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'
    >
      <div
        style='background: linear-gradient(135deg, #679a58 0%, #5a8a4a 100%); padding: 24px; text-align: center;'
      >
        <h1
          style='color: #fff; margin: 0; font-size: 22px; font-weight: 700;'
        >New FREE Retouch Request</h1>
      </div>

      <div style='padding: 24px 24px 8px 24px; color: #333;'>
        <p style='margin: 0 0 8px 0;'><strong>Name:</strong> {{name}}</p>
        <p style='margin: 0 0 8px 0;'><strong>Email:</strong> {{email}}</p>
        <p style='margin: 0 0 8px 0;'><strong>Phone:</strong> {{phone}}</p>
        <p style='margin: 0 0 8px 0;'><strong>Company:</strong> {{company}}</p>
        <p style='margin: 0 0 8px 0;'><strong>File:</strong>
          {{fileName}}
          ({{fileSizeKB}}
          KB)</p>
        <p style='margin: 0 0 16px 0;'><strong>Submitted:</strong>
          {{submittedAt}}</p>

        {{#if folderLink}}
          <div style='text-align: center; margin: 24px 0;'>
            <a
              href='{{folderLink}}'
              style='display: inline-block; background: linear-gradient(135deg, #679a58 0%, #5a8a4a 100%); color: white; padding: 12px 20px; text-decoration: none; border-radius: 20px; font-weight: bold; font-size: 14px;'
            >Open Google Drive Folder</a>
          </div>
          <p
            style='color: #777; font-size: 12px; word-break: break-all; text-align: center; margin-top: 0;'
          >{{folderLink}}</p>
        {{/if}}
      </div>

      <div
        style='background-color: #f8f9fa; padding: 16px; text-align: center; border-top: 1px solid #e9ecef;'
      >
        <p style='color: #666; font-size: 12px; margin: 0;'>Internal
          notification from Retouch Pro</p>
      </div>
    </div>
  </body>
</html>
`;

export type UploadFreeTemplateData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  fileName: string;
  fileSizeKB: number;
  submittedAt: string;
  folderLink?: string;
};
