import sys

from PySide6 import QtCore, QtGui, QtWidgets
from PySide6.QtCore import Qt

class TableModel(QtCore.QAbstractTableModel):
    def __init__(self, data):
        super().__init__()
        self._data = data

    
    def  data(self, index, role):
        if role ==Qt.DisplayRole:
            #nested-list  data structure
            # .row() indexes into the outer list
            # .column() indexes into the sub-list
            return self._data[index.row()][index.column()]
    
    def rowCount(self, index):
        # the length of the outer list
        return len(self._data)
    
    def  columnCount(self, index):
        # takes the first sub-list and returbs the length(only works if rows are of equal length)
        return len(self._data[0])
    
class MainWindow(QtWidgets.QMainWindow):
    def __init__(self):
        super().__init__()
        self.table = QtWidgets.QTableView()
        data = [
        [4, 1, 3, 3, 7],
        [9, 1, 5, 3, 8],
        [2, 1, 5, 3, 9],
        ]
        self.model = TableModel(data)
        self.table.setModel(self.model)
        self.setCentralWidget(self.table)

app = QtWidgets.QApplication(sys.argv)
window = MainWindow()
window.show()
app.exec()
