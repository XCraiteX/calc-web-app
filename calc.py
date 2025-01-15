import eel

eel.init('web')

@eel.expose
def calculate(string):
    try:
        return eval(string)
    except: return 'Error!'

eel.start('web.html', size = (380, 660))