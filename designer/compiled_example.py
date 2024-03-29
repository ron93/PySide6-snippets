import random
import sys

from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow

from MainWindow import Ui_MainWindow

class MainWindow(QMainWindow, Ui_MainWindow):
    def  __init__(self):
        super().__init__()
        self.setupUi(self)
        self.show()
        # You can still override values from your UI file within your code,
        # but if possible, set them in Qt Creator. See the properties panel.

        f = self.label.font()
        f.setPixelSize(25)
        self.label.setAlignment(Qt.AlignHCenter | Qt.AlignVCenter)
        self.label.setFont(f)

        # signale from ui connection
        self.pushButton.pressed.connect(self.update_label)

    def update_label(self):
        n = random.randint(1, 6)
        self.label.setText("%d" % n)

app = QApplication(sys.argv)
w = MainWindow()
app.exec()