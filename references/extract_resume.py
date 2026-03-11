try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not installed")
    exit(1)

import re

def extract_text(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return None

pdf_path = r"d:\KODE\foliage\references\tanish-desai-resume.pdf"
text = extract_text(pdf_path)

if text:
    print("---EXTRACTED TEXT START---")
    print(text)
    print("---EXTRACTED TEXT END---")
else:
    print("Failed to extract text.")
