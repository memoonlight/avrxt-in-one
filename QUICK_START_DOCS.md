# 🚀 QUICK START GUIDE - Docs Admin

## ⚡ Get Started in 30 Seconds

### 1️⃣ **Access Admin**
```
URL: http://localhost:3000/docs/admin
```

### 2️⃣ **Login**
```
Username: demo
Password: demo
```

### 3️⃣ **Create Your First Doc**
1. Click "**+ New Document**"
2. Fill in the form
3. Write content in Markdown
4. Toggle "**Publish Document**"
5. Click "**SAVE_CHANGES**"

### 4️⃣ **View Live**
```
URL: http://localhost:3000/docs
```

---

## 🎨 Admin Interface Layout

```
┌─────────────────────────────────────────────────────────┐
│  📚 Docs_Publisher v2.0    [👁️ PREVIEW] [💾 SAVE] [🚪 EXIT] │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  🔍 Search   │  📝 Document Editor                      │
│  [All][Live] │                                          │
│  [Draft]     │  ┌────────────────────────────────────┐ │
│              │  │ Title: ___________________         │ │
│  ➕ New Doc  │  │ Slug: ____________________         │ │
│              │  │ Category: _________________        │ │
│  📄 Doc 1    │  │ Color: [Blue ▼]                    │ │
│  📄 Doc 2    │  │ Description: ______________        │ │
│  📄 Doc 3    │  │ ☑ Publish Document                 │ │
│  📄 Doc 4    │  └────────────────────────────────────┘ │
│              │                                          │
│              │  ✍️ Content (Markdown)                   │
│              │  ┌────────────────────────────────────┐ │
│              │  │ # Your Title                       │ │
│              │  │                                    │ │
│              │  │ Write your content here...         │ │
│              │  │                                    │ │
│              │  └────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────┘
```

---

## 🎯 Key Features at a Glance

| Feature | Icon | Description |
|---------|------|-------------|
| **Search** | 🔍 | Find docs instantly |
| **Filter** | 🎯 | All / Published / Draft |
| **Create** | ➕ | New document button |
| **Edit** | ✏️ | Modify existing docs |
| **Delete** | 🗑️ | Remove documents |
| **Publish** | 🌐 | Make docs public |
| **Draft** | 🔒 | Keep docs private |
| **Save** | 💾 | Persist changes |
| **Preview** | 👁️ | View live site |

---

## 📝 Markdown Cheat Sheet

```markdown
# H1 Heading
## H2 Heading
### H3 Heading

**Bold** and *Italic*

- Bullet point
1. Numbered list

[Link text](https://url.com)

> Blockquote

`inline code`

\`\`\`javascript
// Code block
const x = 10;
\`\`\`
```

---

## 🎨 Color Themes

- 🔵 **Blue** - Infrastructure, Systems
- 🔷 **Cyan** - Architecture, APIs
- 🟣 **Purple** - Data, Databases
- 🟢 **Green** - Email, Communication
- 🟠 **Orange** - Security, DevOps
- 🩷 **Pink** - Design, Frontend

---

## ⚡ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Save | `Ctrl + S` (browser default) |
| Search | Click search box |
| New Doc | Click "+ New Document" |

---

## 🔧 Troubleshooting

### **Can't see my document on /docs?**
✅ Make sure "Publish Document" is checked  
✅ Click "SAVE_CHANGES"  
✅ Refresh the /docs page

### **Changes not saving?**
✅ Check browser console for errors  
✅ Ensure localStorage is enabled  
✅ Try clearing cache and reload

### **Forgot password?**
✅ It's hardcoded: `demo` / `demo`  
✅ Check localStorage key: `avrxt_docs_admin_session`

---

## 📊 Status Indicators

| Icon | Meaning |
|------|---------|
| 🌐 | Published (visible on /docs) |
| 🔒 | Draft (hidden from public) |
| ✅ | Save successful |
| ⚠️ | Validation error |

---

## 🎯 Best Practices

1. **Use descriptive slugs**: `my-awesome-guide` not `doc1`
2. **Write clear descriptions**: Help users find content
3. **Choose appropriate colors**: Match content type
4. **Test before publishing**: Use draft mode first
5. **Save frequently**: Click save often!

---

## 🚀 Next Steps

1. ✅ Login to admin
2. ✅ Explore existing docs
3. ✅ Create a test document
4. ✅ Edit and save
5. ✅ View on /docs page
6. ✅ Delete test document
7. 🎉 Start creating real docs!

---

**Ready to publish? Let's go!** 🚀

Access admin: http://localhost:3000/docs/admin
