# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **"Start measuring"**
3. **Sign in** with your Google account
4. Follow the setup wizard

## Step 2: Create Property
1. **Property name**: `Francis Bockarie Portfolio`
2. **Reporting time zone**: Your timezone
3. **Currency**: USD
4. Click **"Next"**

## Step 3: Business Information
1. **Business size**: Small business
2. **How do you plan to use GA**: Portfolio/Personal website
3. Click **"Create"**

## Step 4: Get Your Tracking ID
1. **Data Streams** → **"Add stream"**
2. **Platform**: Web
3. **Website URL**: Your portfolio URL (e.g., `https://francis-bockarie-portfolio.onrender.com`)
4. **Stream name**: `Portfolio Website`
5. Click **"Create stream"**
6. **Copy your Measurement ID** (starts with `G-`)

## Step 5: Update Your Code
Replace `G-XXXXXXXXXX` in `src/components/GoogleAnalytics.tsx` with your actual Measurement ID:

```typescript
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID
```

## Step 6: Deploy and Test
1. **Commit and push** your changes
2. **Deploy** to Render
3. **Visit your site** to test tracking
4. **Check Google Analytics** → Real-time reports

## What You'll Track:
- ✅ **Page views** - Which sections people visit
- ✅ **Visitor count** - How many people visit
- ✅ **Traffic sources** - Where visitors come from
- ✅ **Device types** - Mobile vs desktop
- ✅ **Time on site** - How long people stay
- ✅ **Bounce rate** - How many leave quickly
- ✅ **Geographic data** - Where visitors are from

## Privacy Features:
- ✅ **IP anonymization** enabled
- ✅ **GDPR compliant** settings
- ✅ **No personal data** collected
- ✅ **Cookie consent** ready

## Dashboard Access:
- **Real-time**: See current visitors
- **Audience**: Demographics, devices, locations
- **Acquisition**: Traffic sources (Google, LinkedIn, etc.)
- **Behavior**: Most visited pages, time on site
- **Conversions**: Contact form submissions

## Pro Tips:
- **Set up goals** for contact form submissions
- **Create custom reports** for specific insights
- **Set up email alerts** for high traffic days
- **Export data** for portfolio metrics

## Troubleshooting:
- **No data showing**: Wait 24-48 hours for first data
- **Wrong tracking ID**: Double-check the G-XXXXXXXXXX format
- **Not working**: Check browser console for errors

Your analytics will help you understand your portfolio's performance and visitor engagement! 