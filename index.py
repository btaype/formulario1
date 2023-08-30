from flask import Flask, render_template,request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("formulario.html")

@app.route("/hello",methods=["post"])
def hello():
    name=request.form.get("name")
    fecha=request.form.get("fecha")
    ocupacion=request.form.get("ocupacion")
    telf=request.form.get("telf")
    email=request.form.get("email")
    nacionalidad=request.form.get("nacionalidad")
    ingles=request.form.get("ingles")
    lenguajes=request.form.get("result1")
    aptitudes=request.form.get("aptitudes")
    a_fisico=request.form.get("a_fisico")
    c_v_d=request.form.get("c_v_d")
    p_ofice=request.form.get("p_ofice")
    tenis=request.form.get("tenis")
    texto1=request.form.get("texto1")



    return render_template("curriculo.html",name =name,fecha=fecha,ocupacion=ocupacion,telf=telf,email=email,nacionalidad=nacionalidad,ingles=ingles,lenguajes=lenguajes,aptitudes=aptitudes,a_fisico=a_fisico,c_v_d=c_v_d,p_ofice=p_ofice,tenis=tenis,texto=texto1)