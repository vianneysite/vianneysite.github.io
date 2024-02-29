# Créé par Vianney, le 19/02/2024 en Python 3.7
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email(subject, message, from_addr, to_addr):
    msg = MIMEMultipart()
    msg['From'] = from_addr
    msg['To'] = to_addr
    msg['Subject'] = subject

    msg.attach(MIMEText(message, 'plain'))

    server = smtplib.SMTP('smtp.office365.com', 587)
    server.starttls()
    server.login(from_addr, "Vianspac 2007")
    text = msg.as_string()
    server.sendmail(from_addr, to_addr, text)
    server.quit()

# Utilisation de la fonction
send_email("Sujet du mail", "Contenu du mail", "vianney.pacaud@outlook.fr", "vpacaud.pac@gmail.com")