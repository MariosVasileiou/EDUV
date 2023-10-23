import time
import RPi.GPIO as GPIO



# ======================== Controlling Motors with relays ========================

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
# Right Motor
GPIO.setup(24, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)
# Left
GPIO.setup(13, GPIO.OUT)
GPIO.setup(19, GPIO.OUT)
# Front Left
GPIO.setup(16, GPIO.OUT)
GPIO.setup(26, GPIO.OUT)
# Rear Left
GPIO.setup(20, GPIO.OUT)
GPIO.setup(21, GPIO.OUT)
# Front Right --
GPIO.setup(4, GPIO.OUT)
GPIO.setup(17, GPIO.OUT)
# Rear Right
GPIO.setup(27, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)


GPIO.output(23, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(24, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(13, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(19, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(16, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(26, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(4, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(17, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(20, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(21, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(27, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(22, GPIO.HIGH)



#right
def m1(x):
    if x == 0:
        GPIO.output(24, GPIO.HIGH)
        GPIO.output(23, GPIO.HIGH)
    elif x == -1:
        GPIO.output(23, GPIO.LOW)
        GPIO.output(24, GPIO.HIGH)
    elif x == 1:
        GPIO.output(24, GPIO.LOW)
        GPIO.output(23, GPIO.HIGH)


# Left
def m2(x):
    if x == 0:
        GPIO.output(13, GPIO.HIGH)
        time.sleep(0.1)
        GPIO.output(19, GPIO.HIGH)
    elif x == -1:
        GPIO.output(19, GPIO.LOW)
        GPIO.output(13, GPIO.HIGH)
    elif x == 1:
        GPIO.output(13, GPIO.LOW)
        GPIO.output(19, GPIO.HIGH)


# Front Right
def m5(x):
    if x == 0:
        GPIO.output(17, GPIO.HIGH)
        GPIO.output(4, GPIO.HIGH)
    elif x == 1:
        GPIO.output(4, GPIO.LOW)
        GPIO.output(17, GPIO.HIGH)
    elif x == -1:
        GPIO.output(17, GPIO.LOW)
        GPIO.output(4, GPIO.HIGH)


# Rear Left
def m4(x):
    if x == 0:
        GPIO.output(20, GPIO.HIGH)
        GPIO.output(21, GPIO.HIGH)
    elif x == -1:
        GPIO.output(21, GPIO.LOW)
        GPIO.output(20, GPIO.HIGH)
    elif x == 1:
        GPIO.output(20, GPIO.LOW)
        GPIO.output(21, GPIO.HIGH)

# Front Left
def m3(x):
    if x == 0:
        GPIO.output(16, GPIO.HIGH)
        GPIO.output(26, GPIO.HIGH)
    elif x == -1:
        GPIO.output(26, GPIO.LOW)
        GPIO.output(16, GPIO.HIGH)
    elif x == 1:
        GPIO.output(16, GPIO.LOW)
        GPIO.output(26, GPIO.HIGH)


# Rear Right
def m6(x):
    if x == 0:
        GPIO.output(27, GPIO.HIGH)
        GPIO.output(22, GPIO.HIGH)
    elif x == -1:
        GPIO.output(22, GPIO.LOW)
        GPIO.output(27, GPIO.HIGH)
    elif x == 1:
        GPIO.output(27, GPIO.LOW)
        GPIO.output(22, GPIO.HIGH)


def forward():
    m1(1)
    m2(1)
    time.sleep(0.1)


def backwards():
    m1(-1)
    m2(-1)
    time.sleep(0.1)


def left():
    m1(1)
    m2(-1)
    time.sleep(0.1)


def right():
    m1(-1)
    m2(1)
    time.sleep(0.1)


def up():
    m3(1)
    m4(1)
    m5(1)
    m6(1)
    time.sleep(0.1)


def down():
    m3(-1)
    m4(-1)
    m5(-1)
    m6(-1)
    time.sleep(0.1)


def up_front():
    m3(1)
    m4(-1)
    m5(1)
    m6(-1)
    time.sleep(0.1)


def up_rear():
    m3(-1)
    m4(1)
    m5(-1)
    m6(1)
    time.sleep(0.1)


def up_right():
    m3(-1)
    m4(-1)
    m5(1)
    m6(1)
    time.sleep(0.1)


def up_left():
    m3(1)
    m4(1)
    m5(-1)
    m6(-1)
    time.sleep(0.1)


def stopFB():
    m1(0)
    time.sleep(0.02)
    m2(0)
    time.sleep(0.1)


def stopUD():
    m3(0)
    time.sleep(0.02)
    m4(0)
    time.sleep(0.02)
    m5(0)
    time.sleep(0.02)
    m6(0)
    time.sleep(0.1)


def stop_all():
    print("Stopping all motors")
    time.sleep(0.02)
    m1(0)
    time.sleep(0.02)
    m2(0)
    time.sleep(0.02)
    m3(0)
    time.sleep(0.02)
    m4(0)
    time.sleep(0.02)
    m5(0)
    time.sleep(0.02)
    m6(0)
    time.sleep(0.1)

