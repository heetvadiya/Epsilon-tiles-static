# 📧 **EmailJS Setup Guide - 100% Frontend Solution**

## 🎉 **Perfect Choice!** 
You now have a **true frontend-only** OTP system with **zero backend complexity**!

## ⚙️ **Step 1: Environment Variables**

Add these to your `.env` file:

```bash
# EmailJS Configuration (Get from EmailJS Dashboard)
VITE_EMAILJS_SERVICE_ID=service_your_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_template_id
VITE_EMAILJS_USER_ID=user_your_user_id
```

---

## 🔧 **Step 2: EmailJS Account Setup**

### **2.1 Create EmailJS Account**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (It's FREE!)
3. Verify your email address

### **2.2 Add Email Service**
1. In EmailJS Dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (easiest for testing)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**
4. Follow the connection steps
5. **Copy the Service ID** → Add to `.env` as `VITE_EMAILJS_SERVICE_ID`

### **2.3 Create Email Template**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Settings**:
   - **Template Name**: `OTP Verification`
   - **Subject**: `Your FLORA PDF Download Code`
   - **To Email**: `{{to_email}}` ⚠️ **IMPORTANT: Add this in the "To" field**
4. **Template Content** (copy this):

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Verification Code</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">FLORA by Epsilon</h1>
            <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 16px;">Premium SPC Flooring</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            <h2 style="color: #333; margin-top: 0; font-size: 24px;">Hello {{to_name}}!</h2>
            <p style="color: #666; font-size: 16px; line-height: 1.6;">Thank you for your interest in our premium SPC flooring collection. Here's your verification code for PDF download:</p>
            
            <!-- OTP Code -->
            <div style="background: #f8f9ff; border: 2px solid #667eea; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
                <p style="color: #667eea; font-size: 14px; margin: 0 0 10px 0; font-weight: 600;">YOUR VERIFICATION CODE</p>
                <div style="font-size: 42px; font-weight: bold; color: #667eea; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                    {{otp_code}}
                </div>
            </div>
            
            <!-- Instructions -->
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <p style="color: #856404; margin: 0; font-size: 14px;">
                    ⏰ <strong>Important:</strong> This code expires in {{expiry_minutes}} minutes for security.
                </p>
            </div>
            
            <p style="color: #666; font-size: 14px; line-height: 1.6;">
                Enter this code on our website to verify your email and download the PDF. If you didn't request this code, please ignore this email.
            </p>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
                {{company_name}} | {{product_line}}<br>
                Premium quality, innovative design, exceptional durability.
            </p>
        </div>
    </div>
</body>
</html>
```

5. **Save Template**
6. **Copy the Template ID** → Add to `.env` as `VITE_EMAILJS_TEMPLATE_ID`

### **2.4 Get User ID**
1. Go to **"Account"** or **"Integration"**
2. Find your **"User ID"** (also called "Public Key")
3. **Copy the User ID** → Add to `.env` as `VITE_EMAILJS_USER_ID`

---

## 🗄️ **Step 3: Database Setup**

### **3.1 Run Database Schema**
1. Open **Supabase SQL Editor**
2. Copy and run the schema from `database/sendgrid_simple_schema.sql`
3. This creates the `simple_otp_codes` table for tracking OTPs

---

## 🧪 **Step 4: Testing**

### **4.1 Check Environment Variables**
Make sure your `.env` file looks like this:
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_def456uvw  
VITE_EMAILJS_USER_ID=user_ghi789rst

# Supabase (existing)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

### **4.2 Test the Flow**
1. **Start Development Server**: `npm run dev`
2. **Click PDF Download Button** 
3. **Fill Form** with your real email
4. **Click "Send Verification Code"**
5. **Check Email** (including spam folder)
6. **Enter Code** and verify download works

### **4.3 Troubleshooting**

#### **Common Issues & Solutions:**

**📧 Emails not arriving:**
- ✅ Check spam/junk folder first
- ✅ Verify EmailJS service is connected in dashboard
- ✅ Confirm environment variables are set correctly
- ✅ Try with a different email address

**🔧 Template issues:**
- ✅ Ensure template "To" field has `{{to_email}}`
- ✅ Check all template variables match the code
- ✅ Test template in EmailJS dashboard

**⚙️ Configuration issues:**
- ✅ Verify Service ID, Template ID, and User ID are correct
- ✅ Check browser console for error messages
- ✅ Ensure email service is properly connected

---

## 💰 **Cost & Limits**

### **EmailJS Free Tier:**
- ✅ **200 emails/month** (permanent)
- ✅ **Template system**
- ✅ **All email providers**
- ✅ **Browser-friendly**

### **Paid Plans (if needed):**
- **Personal**: $9/month → 1,000 emails
- **Team**: $25/month → 10,000 emails
- **Business**: $40/month → 50,000 emails

### **Expected Usage:**
- **100 downloads/month**: FREE ✅
- **500 downloads/month**: $9/month
- **2000+ downloads/month**: $25/month

---

## 🎨 **Customization**

### **5.1 Email Template**
- Edit template in EmailJS dashboard
- Add your logo/branding
- Customize colors and styling
- Test with different content

### **5.2 OTP Settings**
Edit in `src/utils/emailjsOtpService.ts`:
```typescript
const OTP_EXPIRY_MINUTES = 5;  // Change expiry time
const OTP_MAX_ATTEMPTS = 3;    // Change max attempts
```

### **5.3 UI Customization**
Edit `src/components/PDFDownloadButton.tsx`:
- Form fields and validation
- Button text and styling
- Success messages
- Error handling

---

## 🔒 **Security Features**

### **✅ Built-in Security:**
- **6-digit random OTP codes**
- **5-minute expiration**
- **3-attempt limit**
- **Database audit trail**
- **Email validation**

### **✅ EmailJS Security:**
- **API keys not exposed** (EmailJS handles this)
- **Rate limiting** on EmailJS side
- **Spam protection** built-in
- **HTTPS encryption** for all requests

---

## 📊 **Analytics**

### **Database Analytics:**
```sql
-- View OTP statistics
SELECT * FROM simple_otp_analytics 
WHERE date >= CURRENT_DATE - INTERVAL '7 days';

-- Recent activity
SELECT email, created_at, verified 
FROM simple_otp_codes 
ORDER BY created_at DESC 
LIMIT 10;
```

### **EmailJS Analytics:**
- Login to EmailJS Dashboard
- View **"Email History"**
- Monitor delivery status
- Track usage limits

---

## 🚨 **Common Issues & Solutions**

### **Problem: No emails received**
✅ **Check EmailJS service connection**  
✅ **Verify template variables match code**  
✅ **Test email service in EmailJS dashboard**  
✅ **Check environment variables**  

### **Problem: Template variables not working**
✅ **Ensure template uses {{variable_name}}**  
✅ **Check templateParams object matches**  
✅ **Test template in EmailJS dashboard**  

### **Problem: Service connection failed**
✅ **Re-authorize email service**  
✅ **Check email provider settings**  
✅ **Try different email service**  

---

## 🎉 **Benefits Summary**

### **✅ Why EmailJS Rocks:**
1. **🚀 True Frontend-Only** - Zero backend complexity
2. **💰 Cost Effective** - 200 free emails/month
3. **🛡️ No CORS Issues** - Designed for browsers
4. **🔧 Easy Setup** - 30 minutes max
5. **📱 Works Everywhere** - All devices and browsers
6. **🎨 Customizable** - Full template control
7. **📊 Analytics** - Built-in tracking
8. **🔒 Secure** - Professional email delivery

---

## 🚀 **What You Have Now:**

### **✅ Files Structure:**
```
src/
├── components/
│   └── PDFDownloadButton.tsx     # ✅ Updated for EmailJS
├── utils/
│   └── emailjsOtpService.ts      # ✅ EmailJS service
└── data/
    └── products.ts               # ✅ Existing product data

database/
└── sendgrid_simple_schema.sql    # ✅ Database schema

.env                              # ✅ Add EmailJS config
package.json                      # ✅ @emailjs/browser installed
```

### **✅ Clean Codebase:**
- ❌ **Removed**: MojoAuth files
- ❌ **Removed**: SendGrid serverless functions  
- ❌ **Removed**: Backend proxy files
- ❌ **Removed**: Unnecessary documentation
- ✅ **Added**: Simple EmailJS solution

---

## 🎊 **Congratulations!**

You now have:
- ✅ **100% Frontend Solution** - No backend at all!
- ✅ **Professional Email OTP** - Beautiful templates
- ✅ **No CORS Issues** - EmailJS works in browser
- ✅ **Free Tier Perfect** - 200 emails/month
- ✅ **Production Ready** - Secure and scalable
- ✅ **Easy Maintenance** - Simple codebase

## 📞 **Quick Start Checklist:**

1. ✅ **Create EmailJS Account** → [EmailJS.com](https://www.emailjs.com/)
2. ✅ **Set up Email Service** → Connect Gmail/Outlook
3. ✅ **Create Email Template** → Copy template from above
4. ✅ **Get IDs** → Service ID, Template ID, User ID
5. ✅ **Update .env** → Add all three IDs
6. ✅ **Run Database Schema** → In Supabase
7. ✅ **Test OTP Flow** → Use your real email
8. ✅ **Deploy & Enjoy!** → Your frontend-only solution is ready! 🚀

**Perfect for**: PDF downloads, user verification, contact forms, newsletter signups, and any email-based workflows! 📧✨
