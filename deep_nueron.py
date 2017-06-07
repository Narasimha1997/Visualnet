import os as OS_HOOK

from subprocess import call

def call_nuerual_network():
    OS_HOOK.environ['TF_CPP_MIN_LOG_LEVEL']='2'
    call(["python3", "inception3/classify_image.py", "--image_file","images/image.jpg","--model_dir",
    "inception3"])
    pass

def visionnet():
    OS_HOOK.remove('result.txt')
    call_nuerual_network()
    
visionnet()
