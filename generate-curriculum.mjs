import PDFDocument from "pdfkit";
import fs from "fs";

const doc = new PDFDocument({ size: "A4", margin: 60 });
const stream = fs.createWriteStream("public/curriculum.pdf");
doc.pipe(stream);

const DARK_BLUE = "#0a2540";
const LIGHT_BLUE = "#e8f0fe";
const ACCENT = "#1a56db";
const TEXT = "#1e293b";
const GRAY = "#64748b";

// Title page area
doc.fontSize(28).font("Helvetica-Bold").fillColor(DARK_BLUE)
  .text("IdeaWeaver", { align: "center" });

doc.moveDown(0.5);
doc.fontSize(20).font("Helvetica-Bold").fillColor(DARK_BLUE)
  .text("Building Small Language Model", { align: "center" })
  .text("from Scratch", { align: "center" });

doc.moveDown(0.3);
doc.fontSize(13).font("Helvetica-Oblique").fillColor(GRAY)
  .text("A 4-Week Hands-On Program", { align: "center" });

doc.moveDown(1.5);

// Weeks data (Week 13-16 renumbered as 1-4)
const weeks = [
  {
    week: 1,
    title: "PyTorch & Neural Networks",
    desc: "Build a strong foundation in PyTorch and neural networks. Understand tensors, forward passes, backward passes, and training loops.",
    handsOn: "Implement and train a simple neural network using PyTorch.",
  },
  {
    week: 2,
    title: "Tokenizers & Positional Encoding",
    desc: "Learn how raw text is converted into tokens and why tokenization matters. Explore positional encoding techniques used in transformer models.",
    handsOn: "Experiment with different tokenizers and positional encodings.",
  },
  {
    week: 3,
    title: "Attention Mechanisms & KV Cache",
    desc: "Deep dive into attention, self-attention, and key-value caching. Understand how modern LLMs optimize inference performance.",
    handsOn: "Implement attention concepts and observe the impact of KV cache.",
  },
  {
    week: 4,
    title: "Building a Small Language Model (SLM) from Scratch",
    desc: "Bring everything together by building a small language model from scratch. Learn model architecture, training workflows, and real-world constraints.",
    handsOn: "Build, train, and evaluate a small language model end to end.",
  },
];

for (const w of weeks) {
  const startY = doc.y;

  // Week header bar
  doc.save();
  doc.roundedRect(60, startY, 475, 32, 4).fill(DARK_BLUE);
  doc.fontSize(14).font("Helvetica-Bold").fillColor("#ffffff")
    .text(`WEEK ${w.week} – ${w.title}`, 72, startY + 9, { width: 450 });
  doc.restore();

  doc.y = startY + 42;

  // Light background card
  const cardTop = doc.y;
  // We'll draw the card background after measuring text height
  const savedY = doc.y;

  // Measure content
  doc.fontSize(11).font("Helvetica").fillColor(TEXT);
  const descHeight = doc.heightOfString(w.desc, { width: 445 });

  doc.fontSize(11).font("Helvetica-Oblique").fillColor(ACCENT);
  const handsOnText = `Hands-on: ${w.handsOn}`;
  const handsOnHeight = doc.heightOfString(handsOnText, { width: 445 });

  const totalHeight = descHeight + handsOnHeight + 36;

  // Draw card background
  doc.save();
  doc.roundedRect(60, cardTop, 475, totalHeight, 4).fill(LIGHT_BLUE);
  doc.restore();

  // Write description
  doc.y = cardTop + 10;
  doc.fontSize(11).font("Helvetica").fillColor(TEXT)
    .text(w.desc, 75, doc.y, { width: 445 });

  doc.moveDown(0.5);

  // Hands-on
  doc.fontSize(11).font("Helvetica-Oblique").fillColor(ACCENT)
    .text(handsOnText, 75, doc.y, { width: 445 });

  doc.y = cardTop + totalHeight + 18;
}

doc.end();

stream.on("finish", () => {
  console.log("PDF generated at public/curriculum.pdf");
});
