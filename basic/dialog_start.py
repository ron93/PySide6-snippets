# dialog
import sys 
from PySide6.QtWidgets import (
    QApplication, 
    QMainWindow, 
    QPushButton, 
    QDialog,
    QDialogButtonBox,
    QVBoxLayout,
    QLabel
    )

# custom dialog
class CustomDialog(QDialog):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("HELLO")
        buttons = QDialogButtonBox.Ok |QDialogButtonBox.Cancel
        
        self.buttonBox = QDialogButtonBox(buttons)
        self.buttonBox.accepted.connect(self.accept)
        self.buttonBox.rejected.connect(self.reject)

        self.layout = QVBoxLayout()
        message = QLabel("Something happened, is  that OK?")
        self.layout.addWidget(message)
        self.layout.addWidget(self.buttonBox)
        self.setLayout(self.layout)

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("My App")

        button = QPushButton("Press me for a dialog!")
        button.clicked.connect(self.button_clicked)
        self.setCentralWidget(button)

    def  button_clicked(self, s):
        print("Click", s)
        # using built-in dialog
        # dlg = QDialog(self)

        # using custom dialog
        dlg = CustomDialog()

        dlg.setWindowTitle("?")
        dlg.exec()

app = QApplication(sys.argv)

window  = MainWindow()
window.show()

app.exec()