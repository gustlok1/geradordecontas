class Conta{
    static id = 0
    email
    senha
    nome
    sexo

    constructor(email, senha, nome, sexo){
        this.id = id++
        this.email = email
        this.senha = senha
        this.nome = nome
        this.sexo = sexo
    }
}
contas = []

nomesM = "Alexandre	Eduardo	Henrique	Murilo	Theo	André	Enrico	Henry	Nathan	Thiago	Antônio	Enzo	Ian	Otávio	Thomas	Augusto	Erick	Isaac	Pietro	Vicente	Breno	Felipe	João	Rafael	Vinícius	Bruno	Fernando	Kaique	Raul	Vitor	Caio	Francisco	Leonardo	Rian	Yago	Cauã	Frederico	Luan	Ricardo	Ygor	Daniel	Guilherme	Lucas	Rodrigo	Yuri	Danilo	Gustavo	Mathias	Samuel	Álvaro	Cícero	Gael	Lino	Salomão	Amado	Ciro	Gaspar	Lourenço	Santiago	Antony	Conrado	Gonçalo	Martim	Serafim	Bartolomeu	Cristovão	Gregório	Nicolas	Tadeu	Benedito	Dante	Guilhermo	Noah	Tomé	Benício	Dimitri	Hermano	Nuno	Valentino	Benito	Dom	Ícaro	Oliver	Vince	Benjamin	Emanuel	Inácio	Oscar	Zion	Bento	Ernesto	Levi	Romeu		Calebe	Franco	Lince	Ruan"
nomesF = "Agatha	Camila	Esther	Isis	Maitê	Natália	Alícia	Carolina	Fernanda	Joana	Malu	Nicole	Amanda	Catarina	Gabriela	Laís	Maria	Olívia	Ana	Cecília	Gabrielle	Lara	Mariah	Pietra	Antonela	Clara	Giovanna	Larissa	Mariana	Rafaela	Aurora	Clarice	Giulia	Lavínia	Marina	Rebeca	Bárbara	Eduarda	Heloísa	Letícia	Maya	Sara	Beatriz	Elisa	Isabel	Liz	Melissa	Sophie	Bianca	Emanuelly	Isabelly	Lorena	Milena	Stella	Bruna	Emilly	Isadora	Luana	Mirella	Vitória	Yasmin	Açucena	Augusta	Coralina	Hortênsia	Martina	Pilar	Adele	Ayla	Dora	Iolanda	Matilda	Ramona	Agnes	Benedita	Eleonara	Julieta	Melina	Serena	Alegra	Betina	Esperança	Lia	Mia	Tarsila	Allana	Branca	Estrela	Linda	Micaela	Teodora	Amélia	Caetana	Felipa	Lolita	Naomi	Úrsula	Amora	Carlota	Flora	Louise	Olga	Vida	Anabel	Celina	Florença	Luna	Pandora	Violeta	Analu	Charlote	Frederica	Mabel	Penélope	Zoé	Anastácia	Constança	Gaia	Maia	Pérola		Angelina	Cora	Guadalupe	Margarida	Petra"
sobreNomes = "Abreu	Adães	Adorno	Aguiar	Albuquerque	Alcântara	Aleluia	Alencar	Almeida	Altamirano	Alvarenga	Álvares	Alves	Alvim	Amaral	Amigo	Amor	Amorim	Anchieta	Andrada	Andrade	André	Andrioli	Anes	Anjos	Antônio	Antunes	Anunciação	Apolinário	Aragão	Araújo	Arruda	Ascensão	Assis	Auth	Ayrosa	Azeredo	Fagundes	Faleiros	Falópio	Falqueto	Faria	Farias	Faro	Ferrão	Ferraz	Ferro	Ferreira	Ferrolho	Fernandes	Figo	Figueira	Figueiredo	Figueiroa	Fioravante	Fonseca	Fontes	Fortaleza	França	Freire	Freitas	Frota	Furquim	Furtado	Feitosa	Galvão	Gama	Garcia	Garrastazu	Gato	Gomes	Gonçales	Gonçalves	Gonzaga	Gouveia	Guarato	Guimarães	Gusmão	Guerreiro	Jardim	Jesus	Jordão	JunqueiraLacerda	Lange	Leitão	Leite	Leme	Lima	Lins	Lira	Lisboa	Locatelli	Louzada	Lopes	Lutz	Luz	Leonor	Macedo	Machado	Madureira	Maduro	Magalhães	Mairinque	Malafaia	Malta	Marinho	Mariz	Marques	Martins	Mascarenhas	Massa	Matos	Médici	Medeiros	Meireles	Mello	Melo	Mendes	Mendonça	Menino	Messias	Mesquita	Milhomem	Miranda	Monteiro	Moraes	Morais	Morato	Morbeck	Moreira	Moretti	Moro	Müller	Muniz"

function gerarConta(){
    //se vai ser homem ou cuié
    sexo = parseInt(Math.random()*2)
    if(sexo){
        sexo = "masculino"
        //criando nome
        tamanhoNomesM = nomesM.split("	")
        tamanhoSobrenomes = sobreNomes.split("	")
        nome1 = tamanhoNomesM[parseInt(Math.random()*tamanhoNomesM.length)]
        nome2 = tamanhoNomesM[parseInt(Math.random()*tamanhoNomesM.length)]
        sobreNome = tamanhoSobrenomes[parseInt(Math.random()*tamanhoSobrenomes.length)]
        nome = nome1 + " " + nome2 + " " + sobreNome

        //criando email
        email1 = nome.toLowerCase()
        email = email1.replace(/ /g,".") + "@gmail.com"

        //criando senha
        letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        caracteres = ["@","!","#","$","&","*","?"]
        senha = ""
        tamanhoSenha = 8 + parseInt(Math.random()*5)
        for(i=0;i<tamanhoSenha+1;i++){
            letraAleatoria = letras[parseInt(Math.random()*26)]
            maiusculo = parseInt(Math.random()*2)
            caracterAleatorio = parseInt(Math.random()*2)
            if(caracterAleatorio){
                numOuCarac = parseInt(Math.random()*2)
                if(numOuCarac){
                    senha = senha + parseInt(Math.random()*10)
                }
                else{
                    senha = senha + caracteres[parseInt(Math.random()*7)]
                }
            }
            if(maiusculo){
                letraAleatoria = letraAleatoria.toUpperCase()
            }
            senha = senha + letraAleatoria            
        }
        if(senha == /[0-9]/){
            senha = senha + parseInt(Math.random()*10)
        }
        senha = senha + caracteres[parseInt(Math.random()*7)]      
    }
    else{

        sexo = "feminino"
        //criando nome
        tamanhoNomesF = nomesF.split("	")
        tamanhoSobrenomes = sobreNomes.split("	")
        nome1 = tamanhoNomesF[parseInt(Math.random()*tamanhoNomesF.length)]
        nome2 = tamanhoNomesF[parseInt(Math.random()*tamanhoNomesF.length)]
        sobreNome = tamanhoSobrenomes[parseInt(Math.random()*tamanhoSobrenomes.length)]
        nome = nome1 + " " + nome2 + " " + sobreNome

        //criando email
        email1 = nome.toLowerCase()
        email = email1.replace(/ /g,".") + "@gmail.com"

        //criando senha
        letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        caracteres = ["@","!","#","$","&","*","?"]
        senha = ""
        tamanhoSenha = 8 + parseInt(Math.random()*5)
        for(i=0;i<tamanhoSenha+1;i++){
            letraAleatoria = letras[parseInt(Math.random()*26)]
            maiusculo = parseInt(Math.random()*2)
            caracterAleatorio = parseInt(Math.random()*2)
            if(caracterAleatorio){
                numOuCarac = parseInt(Math.random()*2)
                if(numOuCarac){
                    senha = senha + parseInt(Math.random()*10)
                }
                else{
                    senha = senha + caracteres[parseInt(Math.random()*7)]
                }
            }
            if(maiusculo){
                letraAleatoria = letraAleatoria.toUpperCase()
            }
            senha = senha + letraAleatoria            
        }
        if(senha == /[0-9]/){
            senha = senha + parseInt(Math.random()*10)
        }
        senha = senha + caracteres[parseInt(Math.random()*7)]
    }
    document.querySelector("#txtnome").value = nome
    document.querySelector("#txtsenha").value = senha
    document.querySelector("#txtemail").value = email
}

function gravar(){
    contaNova = new Conta(email,senha,nome,sexo)
    contas.push(contaNova)
    console.log(contas)
}

function copiarTexto(indice){
    texto = document.querySelectorAll("input")
    texto[indice].select()
    document.execCommand("copy")
}