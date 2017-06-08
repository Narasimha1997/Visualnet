<h1>VisualNet</h1>
<p>VisualNet provides an  easy to use interface for inceptionv3 model</p>
<h2>Brief summary</h2>
<p>TensorFlow is a machine learning computational library which uses high level parallelism for running machine learning models built using Deep nueral nets, Nueral nets require lots of computing to be done and they can be executed only on large distributed systems with high-end resources. But TensorFlow made it possible to train and run nueral network on wide range of devices.
Tensor flow is a platform for expressing machine learning algorithms. TensorFlow can run and train any machine learning algorithm on any device, because of TensorFlow I'm able to build Visualnet on my laptop.

<h2>Inception v3</h2>
<p>Training a custom nueral net from scratch can take upto 7-8 days, So TensorFlow provides a capablity of only modifying a top layer of pre-trained model as our requirement, this requires less no. of computations. Google released Inception v3 model a nueral net consisting of sophisticated image understanding. This nueral net can visualise images and get the description out of it. Inception is known for recognising image content with less than 5% accuracy</p>

<h2>Usage and Modification guide </h2>
<p> Project is built using both Node.js and Python3, package.json contains all node.js dependencies, Python3 uses only TensorFlow library for creating TensorFlow environment to execute the model.</p>
<h4> First time use: </h4>
<p> While running for first time, run deep_nueron.py, it will download the inception v3 data model, after downloading it should recognise images/image.jpg and produce output.</p>
<h4>Modification and Running</h4>
<p>server.js uses express middleware to create an image server, by default it runs on port 3000, you can change this if required. Open browser and go to localhost:3000/platform-nueralnet, it will load html.htm file which provides a simple UI for uploading an image, Note: only jpeg image is supported as of now. The upload button redirects to route /visualnet, visualnet gets image_data and replaces image.jpg and calls a python3 subprocess executing deep_nueron, deep_nueron checks for model availability and calls classify_image.py in models dir, This is where TensorFlow starts, it creates all environment required, the entire process is quiet complex to put here, the output is saved in output.txt, By default it saves 3 outputs , it can be modifiable in if __name__=='__main__' block.</p>
<p> Server.js waits until entire process is complete and reads sends result.txt file as response. </p>

</h3>Narasimha Prasnna HN</h3>
<h5>Updates and demo app using Visualnet will be realsed shortly</h5>
