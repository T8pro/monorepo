export const ebookFreeTemplate = `
<html>
  <body
    style='font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa;'
  >
    <div
      style='max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);'
    >
      <!-- Header -->
      <div
        style='background: linear-gradient(135deg, #679a58 0%, #5a8a4a 100%); padding: 30px; text-align: center;'
      >
        <h1
          style='color: white; margin: 0; font-size: 28px; font-weight: bold;'
        >📚 Your Free E-book is Ready!</h1>
      </div>

      <!-- Content -->
      <div style='padding: 40px 30px;'>
        <h2 style='color: #333; margin-top: 0; font-size: 24px;'>Thank you for
          your interest,
          {{name}}!</h2>

        <p
          style='color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;'
        >
          We're excited to share our free e-book with you:
          <strong>"How Photos Can Improve Your Sales"</strong>
        </p>

        <p
          style='color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px;'
        >
          This comprehensive guide will help you understand how professional
          photography can boost your business sales and attract more customers.
        </p>

        <!-- Download Button -->
        <div style='text-align: center; margin: 30px 0;'>
          <a
            href='{{domain}}/ebook/download'
            style='display: inline-block; background: linear-gradient(135deg, #679a58 0%, #5a8a4a 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(103, 154, 88, 0.4);'
          >
            📥 Download Your Free E-book
          </a>
        </div>

        <p
          style='color: #999; font-size: 14px; line-height: 1.5; margin-top: 30px;'
        >
          If the button doesn't work, you can copy and paste this link into your
          browser:<br />
          <a
            href='{{domain}}/ebook/download'
            style='color: #679a58; word-break: break-all;'
          >{{domain}}/ebook/download</a>
        </p>
      </div>

      <!-- Footer -->
      <div
        style='background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e9ecef;'
      >
        <p style='color: #666; font-size: 14px; margin: 0;'>
          Thank you for trusting Retouch Pro!<br />
          If you have any questions, feel free to contact us.
        </p>
      </div>
    </div>
  </body>
</html>
`;

export type EbookFreeTemplateData = {
  name: string;
  email: string;
  domain: string;
};
