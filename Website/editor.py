import re
import sys
import time
import binascii
import os
import tb as traceback
import javascript
from browser import document as doc2, window, alert, bind, html, load, timer, worker
from browser.widgets import dialog
import highlight as highlighted
import highlight2 as highlighted2
import json
load('js/CodeMirror.js')
jq = window.jQuery
editor = window.editor2

if hasattr(window, 'localStorage'):
    from browser.local_storage import storage
    from browser.session_storage import storage as ses_storage
else:
    storage = None
   
def reset_src_area():
    
    if storage and 'py_src' in storage:
        
        editor.value = storage['py_src']
        
    else:
        editor.value = ''
   
class cOutputrun:
			encoding = 'utf-8'
			def __init__(self):
				self.cons = ''
				self.buf = ''

			def write(self, data):
				self.buf += str(data)
			def flush(self):
				try:
					self.cons = self.cons + self.buf
					self.buf = ''
				except:
					self.buf=''
				
			def __len__(self):
				return len(self.buf)

class cOutputstep:
			encoding = 'utf-8'
			def __init__(self):
				self.cons = ''
				self.buf = ''

			def write(self, data):
				self.buf += str(data)
			def flush(self):
				try:
					self.cons = self.cons + self.buf
					self.buf = ''
					change()
				except:
					self.buf=''
				
			def __len__(self):
				return len(self.buf)

def change(*args):
    framenu='frame'+str(window.currentframe)
    if ses_storage[framenu]:
        del ses_storage[framenu]
    ses_storage[framenu]=json.dumps([window.linenu,window.cOut.cons])
   

class cOutput:
    encoding = 'utf-8'
    doc2['py-console'].innerHTML=''
    def __init__(self):
        self.cons = doc2['py-console']
        self.buf = ''

    def write(self, data):
        self.buf += str(data)
    def flush(self):
        try:
            self.cons.value += self.buf
            self.buf = ''
        except:
            self.buf=''
       
    def __len__(self):
        return len(self.buf)

if 'py-console' in doc2:
    cOut = cOutput()
    sys.stdout = cOut
    sys.stderr = cOut

def to_str(xx):
    return str(xx)

output = ''



def morehelp(*args):
     jq('#OutputModal').modal('hide')
     jq('#OutputModal').removeData()
     doc2['OutputModalbody2'].innerHTML = str(window.interpreterp)
     doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ interpreter της Python κατά την εκτέλεση του προγραμμάτος σου βγάζει το παρακάτω μύνημα!!\nΔιάβασε το προσεκτικά μπορεί να σε βοηθήσει!!'
     doc2['OutputPic'].src = './images/info2.png'
     doc2['OutputModalBtnResult1'].value = 'OK!'
     doc2['OutputModalBtnResult2'].style.display = 'none'
     jq('#OutputModal').modal()               

def errorcheck(src):
    doc2['py-console'].value = ''
    src2=src.replace('input', 'print')
    if storage is not None:
       storage['py_src'] = src2
    try:
        ns = {'__name__':'__main__'}
        exec(src2, ns)
        state = 1
        
        
    except Exception as exc:
        exc_type, exc_value, exc_tb = sys.exc_info()
        type=str(exc_type)
        try:
            if re.search(r'\b' + r'SyntaxError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                if int(line)==1:
                    doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                else:
                    doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +' ή στη προηγούμενη γραμμή κώδικα.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει συντακτικό σφάλμα!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'IndexError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου χρησιμοποεί δείκτη που δεν υπάρχει!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'ModuleNotFoundError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου χρησιμοποεί το module ' + str(exc_value)+ ' που δεν υπάρχει!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                #doc2['OutputModalBtnResult2'].style.display = 'block'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'NotImplementedError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου χρησιμοποεί συνάρτηση  που δεν υποστηρίζεται από τη σελίδα του EDUV!\nΠιο συγκεκριμμένα:\n' + str(exc_value)
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'KeyError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου χρησιμοποεί το δείκτη ' + str(exc_value)+ ' που δεν υπάρχει!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'ImportError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                varerr2=str(exc_value)
                n = re.search('cannot import name \'(\w+)\'', varerr2)
                value=n.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας χρησιμοποεί τη συνάρτηση ' + str(value)+ ' που δεν υπάρχει!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'StopIteration' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα μια συνάρτηση υπερβαίνει τα στοιχεία επαναλήψεων!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'TypeError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα!\nΕφαρμόζει μια λειτουργία ή συνάρτηση σε ένα αντικείμενο ακατάλληλου τύπου!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'ValueError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα!\nH παράμετρος μιας συνάρτησης είναι ακατάλληλου τύπου!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'NameError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                varerr2=str(exc_value)
                n = re.search('name \'(\w+)\'', varerr2)
                value=n.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου χρησιμοποιεί το αντικείμενο ' + str(value) + ' που δεν έχει οριστεί!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'ZeroDivisionError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου περιέχει διαίρεση με διαιρέτη το 0!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'AssertionError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα!\nΈχεις δηλώσει μια συνθήκη που δεν είναι αλήθινη!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'AttributeError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα!\nΈχεις δηλώσει σε ένα αντικείμενο ένα χαρακτηριστικό το οποίο δεν το κατέχει (AttributeError)!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'IndentationError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα εσοχής!\nΣτον προγραμματισμό συνήθως οι εσοχές γίνονται πατώντας το tab!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'TabError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα εσοχής!\nΣτον προγραμματισμό συνήθως οι εσοχές γίνονται πατώντας το tab!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'none'
                #doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            elif re.search(r'\b' + r'UnboundLocalError' + r'\b', type):
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα!Gίνεται αναφορά σε μια τοπική μεταβλητή σε μια συνάρτηση ή μέθοδο, αλλά καμία τιμή δεν έχει δωθεί σε αυτήν τη μεταβλητή.!!'
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            else:
                varerr = traceback.format_exc()
                window.interpreterp=varerr
                m = re.search('File <string>, line (\d+)', varerr)
                line=m.group(1)
                jq('#OutputModal').removeData()
                doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
                doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα χρόνου εκτέλεσης (RuntimeError)!\nΠιο συγκεκριμμένα:\n' + str(exc_value)
                doc2['OutputPic'].src = './images/fail.png'
                doc2['OutputModalBtnResult1'].value = 'OK!'
                doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
                doc2['OutputModalBtnResult2'].style.display = 'block'
                doc2['OutputModalBtnResult2'].bind('click', morehelp)
                jq('#OutputModal').modal()
            
            #varerr = traceback.format_exc()
            #alert(varerr)
            state = 0
        except:
            doc2["checkCodeP"].removeAttribute("disabled")
            doc2["runPython"].removeAttribute("disabled")
            doc2["runElGrecoP"].removeAttribute("disabled")
            doc2["runBlockly"].removeAttribute("disabled")
            doc2["showCode"].removeAttribute("disabled")
            doc2["checkCode"].removeAttribute("disabled")
            doc2["runElGreco"].removeAttribute("disabled")
            #varerr = traceback.format_exc()
            #window.interpreterp=varerr
            #m = re.search('File <string>, line (\d+)', varerr)
            #line=m.group(1)
            jq('#OutputModal').removeData()
            #doc2['OutputModalbody2'].innerHTML = 'Εγώ θα εστίαζα την προσοχή μου στη γραμμή ' + str(line) +'.'
            doc2['OutputModalbody1'].innerHTML = 'Ο EDUV λέει:\nΟ Κώδικας σου έχει σφάλμα εσοχής (IndentationError)!\nΣτον προγραμματισμό συνήθως οι εσοχές γίνονται πατώντας το tab!!'
            doc2['OutputPic'].src = './images/fail.png'
            doc2['OutputModalBtnResult1'].value = 'OK!'
            #doc2['OutputModalBtnResult2'].value = 'Περισσότερη Βοήθεια'
            doc2['OutputModalBtnResult2'].style.display = 'none'
            #doc2['OutputModalBtnResult2'].bind('click', morehelp)
            jq('#OutputModal').modal()
            state = 0
    doc2["checkCodeP"].removeAttribute("disabled")
    doc2["runPython"].removeAttribute("disabled")
    doc2["runElGrecoP"].removeAttribute("disabled")
    doc2["runBlockly"].removeAttribute("disabled")
    doc2["showCode"].removeAttribute("disabled")
    doc2["checkCode"].removeAttribute("disabled")
    doc2["runElGreco"].removeAttribute("disabled")
    return state

def prestep(*args):
    src = editor.getValue()
    if (src!=''):
        jq('#GifModal').modal()
        jq('#GifModal').on('shown.bs.modal', step)

def step(*args):
    window.maxframe=-1
    window.cOut = cOutputstep()
    sys.stdout = window.cOut
    sys.stderr = window.cOut

    def conclode():
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode2)

    def conclode2(*args):
        jq('#GifModal').off()
        if (window.mode=="ElGreco"):
            window.checkifEle(window.orsrc,window.cOut.cons)
        else:
            window.initplayback()

    def conclode3(e):
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode4)

    def conclode4(*args):
        jq('#GifModal').off()
        iloopmodal()
        
    def conclode5(e):
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode6)

    def conclode6(*args):
        jq('#GifModal').off()
        errorcheck(window.orsrc)

    def iloopmodal():
        doc2["checkCodeP"].removeAttribute("disabled")
        doc2["runPython"].removeAttribute("disabled")
        doc2["runElGrecoP"].removeAttribute("disabled")
        doc2["runBlockly"].removeAttribute("disabled")
        doc2["showCode"].removeAttribute("disabled")
        doc2["checkCode"].removeAttribute("disabled")
        doc2["runElGreco"].removeAttribute("disabled")
        jq('#OutputModal').removeData()
        doc2['OutputModalBtnResult2'].style.display = 'none'
        doc2['OutputModalbody1'].innerHTML= 'Ο EDUV λέει:\nΟ Κώδικας σου προκαλεί αέναο κύκλο(infinite loop)!'
        doc2['OutputModalbody2'].innerHTML = 'Έχει εκτελεστεί η ίδια εντολή πάρα πολλές φορές!\nΟ κωδίκας σου περιέχει σφάλμα αναδρομής.\nΗ εκτέλεση του προγράμματος σου έχει σταματήσει!'
        doc2['OutputPic'].src = './images/fail.png'
        doc2['OutputModalBtnResult1'].value = 'OK!'
        jq('#OutputModal').modal()

    src = editor.getValue()
    window.orsrc=src
    doc2["checkCodeP"].setAttribute('disabled', 'disabled')
    doc2["runPython"].setAttribute('disabled', 'disabled')
    doc2["runElGrecoP"].setAttribute('disabled', 'disabled')
    doc2["runBlockly"].setAttribute('disabled', 'disabled')
    doc2["showCode"].setAttribute('disabled', 'disabled')
    doc2["checkCode"].setAttribute('disabled', 'disabled')
    doc2["runElGreco"].setAttribute('disabled', 'disabled')
    try:
        p = re.compile(r'"""')
        src=p.sub('#', src)
        result = highlighted.insert_highlight_info(src)
        p = re.compile(r'(recframe)[\[](\d+)[\]]')
        result=p.sub('\\1(\\2)', result)
        p = re.compile(r'(infiniteloop)[\[](\d+)[\]]')
        src=p.sub('\\1(\\2)', result)
        src='from browser.session_storage import storage as ses_storage\nfrom browser import window\nimport json\nwindow.trap = 0\nwindow.stepprevious = -1\ndef infiniteloop(step):\n\tif step<=window.stepprevious:\n\t\twindow.trap= window.trap + 1\n\tif window.trap>1000:\n\t\traise Exception("infinite loop")\n\twindow.stepprevious=step\ndef initrecorder():\n\twindow.currentframe=-1\ndef recframe(lineno):\n\twindow.linenu=lineno\n\twindow.currentframe = window.currentframe + 1\n\tframenu="frame"+str(window.currentframe)\n\tses_storage[framenu]=json.dumps([window.linenu,window.cOut.cons])\n\twindow.maxframe=window.maxframe+1\ninitrecorder()\n'+src
        ns = {'__name__':'__main__'}
        
        exec(src, ns)
        conclode()
    except Exception as exc:
        exc_type, exc_value, exc_tb = sys.exc_info()
        type=str(exc_value)
        try:
            if re.search(r'\b' + r'infinite loop' + r'\b', type):
                conclode3(exc)
            elif re.search(r'\b' + r'Javascript QuotaExceededError' + r'\b', type):
                conclode3(exc)
            else:
                conclode5(exc)
        except Exception as exc:
            conclode5(exc)


        
def prerun(*args):
    jq('#OutputModal').off()
    src = editor.getValue()
    if (src!=''):
        jq('#GifModal').modal()
        jq('#GifModal').on('shown.bs.modal', run)

def run(*args):
    window.cOut = cOutputrun()
    sys.stdout = window.cOut
    sys.stderr = window.cOut
    
    def conclode():
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode2)

    def conclode2(*args):
        jq('#GifModal').off()
        if (window.mode=="ElGreco"):
            window.checkifEle(window.orsrc,window.cOut.cons)
        else:
            jq('#OutputModal').removeData()
            doc2['OutputModalBtnResult2'].style.display = 'none'
            doc2['OutputModalbody2'].innerHTML =  window.cOut.cons
            doc2['OutputPic'].src = './images/success1.png'
            doc2['OutputModalBtnResult1'].value = 'OK!'
            if (window.cOut.cons==''):
                doc2['OutputModalbody1'].innerHTML= 'Ο EDUV λέει:\nΟ κώδικας σου δεν έχει κανένα αποτέλεσμα!<br>Ξαναπροσπάθησε και διάβασε το Tutorial!'
            else:
                doc2['OutputModalbody1'].innerHTML= 'Ο EDUV λέει: Ο Κώδικας σου έχει το εξής αποτέλεσμα!'
            doc2["checkCodeP"].removeAttribute("disabled")
            doc2["runPython"].removeAttribute("disabled")
            doc2["runElGrecoP"].removeAttribute("disabled")
            doc2["runBlockly"].removeAttribute("disabled")
            doc2["showCode"].removeAttribute("disabled")
            doc2["checkCode"].removeAttribute("disabled")
            doc2["runElGreco"].removeAttribute("disabled")
            jq('#OutputModal').modal()

    def conclode3(e):
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode4)

    def conclode4(*args):
        jq('#GifModal').off()
        iloopmodal()
        
    def conclode5(e):
        window.me=e
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode6)

    def conclode6(*args):
        jq('#GifModal').off()
        errorcheck(window.orsrc)

    def iloopmodal():
        doc2["checkCodeP"].removeAttribute("disabled")
        doc2["runPython"].removeAttribute("disabled")
        doc2["runElGrecoP"].removeAttribute("disabled")
        doc2["runBlockly"].removeAttribute("disabled")
        doc2["showCode"].removeAttribute("disabled")
        doc2["checkCode"].removeAttribute("disabled")
        doc2["runElGreco"].removeAttribute("disabled")
        jq('#OutputModal').removeData()
        doc2['OutputModalBtnResult2'].style.display = 'none'
        doc2['OutputModalbody1'].innerHTML= 'Ο EDUV λέει:\nΟ Κώδικας σου προκαλεί αέναο κύκλο(infinite loop)!'
        doc2['OutputModalbody2'].innerHTML = 'Έχει εκτελεστεί η ίδια εντολή πάρα πολλές φορές!\nΟ κωδίκας σου περιέχει σφάλμα αναδρομής.\nΗ εκτέλεση του προγράμματος σου έχει σταματήσει!'
        doc2['OutputPic'].src = './images/fail.png'
        doc2['OutputModalBtnResult1'].value = 'OK!'
        jq('#OutputModal').modal()
    src = editor.getValue()
    window.orsrc=src
    doc2["checkCodeP"].setAttribute('disabled', 'disabled')
    doc2["runPython"].setAttribute('disabled', 'disabled')
    doc2["runElGrecoP"].setAttribute('disabled', 'disabled')
    doc2["runBlockly"].setAttribute('disabled', 'disabled')
    doc2["showCode"].setAttribute('disabled', 'disabled')
    doc2["checkCode"].setAttribute('disabled', 'disabled')
    doc2["runElGreco"].setAttribute('disabled', 'disabled')
    try:
        p = re.compile(r'"""')
        src=p.sub('#', src)
        result = highlighted2.insert_highlight_info(src)
        p = re.compile(r'(infiniteloop)[\[](\d+)[\]]')
        src=p.sub('\\1(\\2)', result)
        src='from browser import window\nwindow.trap = 0\nwindow.stepprevious = -1\ndef infiniteloop(step):\n\tif step<=window.stepprevious:\n\t\twindow.trap= window.trap + 1\n\tif window.trap>1000:\n\t\traise Exception("infinite loop")\n\twindow.stepprevious=step\n'+src
        ns = {'__name__':'__main__'}
        exec(src, ns)
        conclode()
    except Exception as exc:
        exc_type, exc_value, exc_tb = sys.exc_info()
        type=str(exc_value)
        try:
            if re.search(r'\b' + r'infinite loop' + r'\b', type):
                conclode3(exc)
            else:
                conclode5(exc)
        except Exception as exc:
            conclode5(exc)

def prerunch(*args):
    jq('#OutputModal').off()
    src = editor.getValue()
    if (src!=''):
        jq('#GifModal').modal()
        jq('#GifModal').on('shown.bs.modal', runch)

def runch(*args):
    window.cOut = cOutputrun()
    sys.stdout = window.cOut
    sys.stderr = window.cOut
    
    def conclode():
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode2)

    def conclode2(*args):
        jq('#GifModal').off()
        jq('#OutputModal').removeData()
        window.checkCode(window.orsrc,window.cOut.cons)
        doc2["checkCodeP"].removeAttribute("disabled")
        doc2["runPython"].removeAttribute("disabled")
        doc2["runElGrecoP"].removeAttribute("disabled")
        doc2["runBlockly"].removeAttribute("disabled")
        doc2["showCode"].removeAttribute("disabled")
        doc2["checkCode"].removeAttribute("disabled")
        doc2["runElGreco"].removeAttribute("disabled")
        

    def conclode3(e):
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode4)

    def conclode4(*args):
        jq('#GifModal').off()
        iloopmodal()
        
    def conclode5(e):
        window.me=e
        jq('#GifModal').modal('hide')
        jq('#GifModal').on('hidden.bs.modal', conclode6)

    def conclode6(*args):
        jq('#GifModal').off()
        errorcheck(window.orsrc)

    def iloopmodal():
        doc2["checkCodeP"].removeAttribute("disabled")
        doc2["runPython"].removeAttribute("disabled")
        doc2["runElGrecoP"].removeAttribute("disabled")
        doc2["runBlockly"].removeAttribute("disabled")
        doc2["showCode"].removeAttribute("disabled")
        doc2["checkCode"].removeAttribute("disabled")
        doc2["runElGreco"].removeAttribute("disabled")
        jq('#OutputModal').removeData()
        doc2['OutputModalBtnResult2'].style.display = 'none'
        doc2['OutputModalbody1'].innerHTML= 'Ο EDUV λέει:\nΟ Κώδικας σου προκαλεί αέναο κύκλο(infinite loop)!'
        doc2['OutputModalbody2'].innerHTML = 'Έχει εκτελεστεί η ίδια εντολή πάρα πολλές φορές!\nΟ κωδίκας σου περιέχει σφάλμα αναδρομής.\nΗ εκτέλεση του προγράμματος σου έχει σταματήσει!'
        doc2['OutputPic'].src = './images/fail.png'
        doc2['OutputModalBtnResult1'].value = 'OK!'
        jq('#OutputModal').modal()
    src = editor.getValue()
    window.orsrc=src
    doc2["checkCodeP"].setAttribute('disabled', 'disabled')
    doc2["runPython"].setAttribute('disabled', 'disabled')
    doc2["runElGrecoP"].setAttribute('disabled', 'disabled')
    doc2["runBlockly"].setAttribute('disabled', 'disabled')
    doc2["showCode"].setAttribute('disabled', 'disabled')
    doc2["checkCode"].setAttribute('disabled', 'disabled')
    doc2["runElGreco"].setAttribute('disabled', 'disabled')
    try:
        p = re.compile(r'"""')
        src=p.sub('#', src)
        result = highlighted2.insert_highlight_info(src)
        p = re.compile(r'(infiniteloop)[\[](\d+)[\]]')
        src=p.sub('\\1(\\2)', result)
        src='from browser import window\nwindow.trap = 0\nwindow.stepprevious = -1\ndef infiniteloop(step):\n\tif step<=window.stepprevious:\n\t\twindow.trap= window.trap + 1\n\tif window.trap>1000:\n\t\traise Exception("infinite loop")\n\twindow.stepprevious=step\n'+src
        ns = {'__name__':'__main__'}
        exec(src, ns)
        conclode()
    except Exception as exc:
        exc_type, exc_value, exc_tb = sys.exc_info()
        type=str(exc_value)
        try:
            if re.search(r'\b' + r'infinite loop' + r'\b', type):
                conclode3(exc)
            else:
                conclode5(exc)
        except Exception as exc:
            conclode5(exc)




reset_src_area()
