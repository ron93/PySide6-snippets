from PySide6.QtWidgets import QApplication, QPushButton
from PySide6.QtGui import QIcon

import sys

app = QApplication(sys.argv)
button = QPushButton("Hello")
icon = QIcon.fromTheme("document-new")
button.setIcon(icon
)
button.show()

app.exec()