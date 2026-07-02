import sys
import subprocess

try:
    import PyPDF2
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2"])
    import PyPDF2

def extract_text(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text

if __name__ == "__main__":
    cv_text = extract_text("Fauzan_Ejaz_CV_DS.pdf")
    with open("cv_extracted.txt", "w", encoding="utf-8") as f:
        f.write(cv_text)
    print("CV extracted successfully")
