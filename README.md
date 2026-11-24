# Miracle & Newman: wedding invitation website

Hashtag **#NewMiracle2027** · Monday, 4th January 2027, 10:00 AM (Africa/Lagos)

You do not need to be a developer. Everything you will ever want to change is in **one box at the top of `script.js`** (called `CONFIG`) and the colours at the top of `styles.css`.

---

## 1. What is in this folder

| File | What it is |
|---|---|
| `index.html` | The invitation page (do not edit, except the 4 link-preview web addresses, see section 6) |
| `styles.css` | Design. Colours are at the very top. |
| `script.js` | **CONFIG (all your text and settings)** + the code that makes the page work |
| `qr.js` | Makes each guest's QR code (loaded only when someone RSVPs "yes") |
| `checkin.html` + `checkin.js` | **Staff-only page** for scanning/checking guests on the wedding day |
| `google-apps-script.gs` | Paste into your Google Sheet to collect RSVPs and verify QR codes |
| `assets/` | Photos, music, flowers, link-preview picture |

## 2. How to edit text

Open `script.js` in any text editor (Notepad is fine). The top part is `CONFIG`. Change the words between the quotes, save, and upload again.
Examples: `gifts.number`, `contact.call`, `vendors`, `toast`, `story`.
Do not delete the quotes, commas or brackets.

### Still to fill in or confirm (placeholders)
1. **Reception address as shown on Google Maps**: `venues[1].mapQuery`. Right now it searches "Umuobo Village, Okpu Ancient Kingdom". Paste a Google Maps share link into `venues[1].mapsUrl` if the pin is not exact.
2. **Ceremony address**: `venues[0].address` is empty (the map link you sent is used). Add the street address if you want it printed.
3. **Father of the Day**: `fatherOfTheDay.name`. Leave empty and the section stays hidden.
4. **G.O.C WhatsApp number** for the "Chat with us on WhatsApp" button in the FAQ: `developer.whatsapp` (format `2348012345678`). The button stays hidden until you add it.
5. **Accommodation answer** in the FAQ: `faq.accommodation` (currently a holding sentence).
6. **Vendor spelling**: "Kaka's Couture" was written "Kaka's coutour" in the brief. Please confirm.
7. **RSVP endpoint**: `rsvp.endpoint` (section 4). RSVPs and QR passes do not work until you add it.
8. **Staff key** in `google-apps-script.gs` (`CHECKIN_KEY`): change it to your own private word.
9. **Web address**: `site.url` in `script.js` and 4 addresses in `index.html` (section 6). They currently assume `https://gocportfolio.github.io/mn2026/`.
10. **Music**: `assets/music.mp3` is the audio you sent. Make sure you have the right to use that song.

## 3. Photos

All photos are in `assets/photos/`. Each has a big version (`name.webp`) and a small one (`name-sm.webp`).
To replace one, save your new photo with the **same file name** (WebP, about 900px wide; thumbnails about 520px wide). The hero slideshow photos are listed in `CONFIG.hero.slides`, the gallery in `CONFIG.gallery.photos`.
The photo that slides out of the envelope is `assets/envelope-card.webp` (about 6:7 portrait).
The studio logo was removed from the photos. Credit "Air Studio" is shown under the gallery (`gallery.credit`).

## 4. RSVP + QR entry pass: how it works

1. A guest fills the form. If they choose **Joyfully accept**, the website creates a unique code such as `MN27-K7QX2PDA` and shows it as a **QR code pass** they can screenshot or download.
2. The RSVP (name, phone, guests, message and the code) lands in your Google Sheet, in a tab called **RSVPs**.
3. On the day, a usher opens `checkin.html`, scans the guest's QR (or types the code). The page shows a **green "Valid entry pass" with the guest's name and party size**, and one tap marks them **ARRIVED** in the sheet (row turns green). If someone shows the same pass twice, it says **"Already checked in"** with the time.
4. If a guest RSVPs again from the same phone number they get the same code and their row is updated (no duplicates).

### Set up the Google Sheet (about 10 minutes)
1. Go to sheets.google.com and create a new blank sheet. Name it "Wedding RSVPs".
2. Click **Extensions → Apps Script**.
3. Delete everything in the editor, then paste all of `google-apps-script.gs`.
4. Near the top change `CHECKIN_KEY` to your own secret word (usher key). Save (disk icon).
5. Click **Deploy → New deployment**. Click the gear and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**, approve the permissions (Advanced → Go to project → Allow), and **copy the Web app URL** (it ends in `/exec`).
7. Open `script.js` and paste the URL into `rsvp: { endpoint: '...' }`. Upload again.
8. **Test it**: open your live site, submit a real RSVP, check that a row appears in the **RSVPs** tab. Then open `checkin.html?c=THE-CODE`, enter your staff key, and check the code works.
9. If you ever change the script, use **Deploy → Manage deployments → Edit → New version → Deploy**, otherwise the old version keeps running.

### On the wedding day
* Give ushers the link `https://YOUR-ADDRESS/checkin.html` and the staff key. They enter the key once (saved on that phone).
* **Any phone camera** can scan a guest's QR: it opens the check-in page with the code filled in. Chrome on Android can also scan inside the page with the **Scan QR** button.
* Never put the staff key on the public invitation or give it to guests.
* The three boxes at the top of the check-in page show RSVPs, expected guests and arrived guests.
* Backup: you can always search the code in the Google Sheet (column G).

## 5. Music

`assets/music.mp3` plays when a guest taps the wax seal (browsers need a tap first). A speaker button at the top right mutes it and remembers the choice.
To use another song, replace the file and keep the name `music.mp3`. To make a file smaller (aim for under 1.5 MB):
`ffmpeg -i song.mp3 -b:a 64k -ac 2 assets/music.mp3`
Only use music you own or have a licence for.

## 6. Link preview (WhatsApp, Facebook, Twitter)

The picture people see when you share the link is `assets/og-image-2.jpg` (the sealed envelope). The text is exactly: *"You are invited to celebrate our union in marriage."*
The web address appears in **4 places** in `index.html`: `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`. Also in `script.js` as `site.url` (used inside QR codes and sharing).
Replace `https://gocportfolio.github.io/mn2026/` with your real address everywhere (Find and Replace).

**If the old preview keeps showing:** rename the image (for example `og-image-3.jpg`, and change the name in `index.html`) or share the link with `?v=2` on the end, then open the Facebook Sharing Debugger (developers.facebook.com/tools/debug), paste your link and press **Scrape Again**.

## 7. Put it online (free)

**GitHub Pages**: create a repository (for example `mn2026`), upload all the files in this folder (keep the `assets` folder), go to **Settings → Pages**, choose **Deploy from a branch → main → / (root)** → Save. After a minute your site is at `https://USERNAME.github.io/mn2026/`.
**Netlify**: drag the whole folder onto app.netlify.com/drop.
**Vercel**: import the repository on vercel.com, no settings needed.

**Own domain (optional)**: in your domain provider add the records your host tells you (usually an `A` record for the bare domain and a `CNAME` for `www`). Afterwards update the 4 addresses (section 6) and `site.url`.

## 8. Personal guest links

Add `?guest=Name` to the link and the envelope and card greet "Dear Name" and the RSVP name is filled in.
Spaces become `%20` and `&` becomes `%26`:
`https://YOUR-ADDRESS/?guest=Mr%20%26%20Mrs%20Okafor`
Add `?nointro` to skip the envelope (useful for testing).

## 9. Before you send the link to guests: checklist
1. All placeholders in section 2 done.
2. RSVP endpoint pasted, and a **real test RSVP** appears in the Google Sheet.
3. Test the QR: scan the pass with a second phone and confirm check-in works with your staff key.
4. Staff key changed from `CHANGE-ME-usher-key`.
5. The 4 web addresses match your live address and `assets/og-image-2.jpg` opens in a browser.
6. Share the link in a fresh WhatsApp chat to see the preview.
7. Open it on a real iPhone (Safari) and an Android phone (Chrome) and a laptop.

Website design: G.O.C | Brand Strategist × AI
