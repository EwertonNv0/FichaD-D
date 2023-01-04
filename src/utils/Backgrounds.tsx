export const backgrounds = [
    {
        id: 1,
        name: 'Acólito',
        skills: 'Intuição, Relígião.',
        tools: 'Nenhum',
        language: 'Dois a sua escolha.',
        equipment: '01 - Símbolo sagrado (um presente dado quando você entrou no templo), 01 - Livro de preces ou uma conta de orações, 05 - Varetas de incenso, Vestimentas, 01 - Conjunto de roupas comuns e 01 - Algibeira contendo 15po',
        description: 'Como um acólito, você detém o respeito daqueles que compartilham de sua fé, e você pode realizar cerimônias de sua divindade. Você e seus companheiros de aventura podem até receber cura e caridade de um templo, santuário ou outro posto de sua fé, embora devam fornecer quaisquer componentes materiais necessários para as magias. Aqueles que compartilham de sua religião vão garantir a você (mas apenas você), custeando um estilo de vida modesto. Você também pode possuir laços com um templo específico devotado à sua divindade ou panteão, e fixar residência nele. Pode ser o templo que você está acostumado a servir, se ainda tiver boas relações com ele, ou um templo no qual você encontrou um novo lar. Enquanto frequentar as redondezas desse templo, você pode solicitar os sacerdotes para assisti-lo, desde que essa assistência não seja de alguma forma perigosa e que você sempre esteja em uma boa relação com seu templo.'
    },

    {
        id: 2,
        name: 'Artesão da Guilda',
        variantDescription: 'Variação',
        skills: 'Intuição, Persuasão.',
        tools: 'Um tipo de Ferramenta de Artesão',
        language: 'Um a sua escolha.',
        equipment: '01 - Conjunto de ferramentas de Artesão (à sua escolha), 01 - Carta de apresentação da sua Guilda, 01 - Conjunto de roupas de viajante e 01 - Algibeira com 15po',
        description: 'Como um membro cativo e respeitado da guilda, você pode contar com certos benefícios que a sociedade garante. Seus camaradas, membros da guilda, irão provê-lo com hospedagem e comida, se necessário, e pagarão pelo seu funeral se preciso for. Em algumas cidades e vilas, um salão da guilda oferece um local central para conhecer outros membros de profissão, podendo ser um bom lugar para se conhecer patrões, aliados e empregados em potencial.Guildas, muitas vezes, detêm tremendos poderes políticos. Se você for acusado de um crime, sua guilda irá ampará-lo se uma boa defesa puder ser apresentada para provar sua inocência ou se o crime for justificável. Você pode, também, ter acesso a figuras políticas poderosas através da guilda, se você for um membro bem posicionado. Tais conexões devem exigir doações de dinheiro ou itens mágicos para os cofres da guilda.Você deve pagar cotas de 5 po por mês a guilda. Se você não pagar, você irá contrair uma dívida para permanecer nas boas graças da guilda.',
        variant: [
            {
                id: 1,
                name: 'Nenhum'
            },
            {
                id: 2,
                name: 'Mercador de Guilda',
                description: 'Ao invés de um artesão de guilda, você pertence a uma guilda de mercadores, mestres de caravana ou comerciantes. Você não constrói itens, mas ganhou a vida comprando e vendendo os trabalhos dos outros (ou a matéria-prima que os artesãos precisam para praticar seus ofícios). Sua guilda deve ser um grande consorcio (ou família) de mercadores com interesses por toda a região. Talvez você transporte bens de um lugar para outro, de barco, carroça ou em caravana, ou compra esses bens de comerciantes que viajam e os vende na sua própria pequena loja. De certas formas, a vida de comerciante viajante por si, tende a levar a aventuras, muito mais que a vida de artesão.Ao invés de proficiência com ferramentas de artesão, você deveria ter proficiência com ferramentas de navegador ou um idioma adicional. E, ao invés de ferramentas de artesão, você poderia começar com uma mula ou carroça.'
            }
        ]
    },

    {
        id: 3,
        name: 'Artista',
        variantDescription: 'Variação',
        skills: 'Acrobacia, Atuação.',
        tools: 'Kit de Disfarce, um tipo de instrumento musical.',
        language: 'Nenhum',
        equipment: '01 - Instrumento musical (à sua escolha), 01 - Presente de um admirador (carta de amor, mecha de cabelo ou uma bijuteria), 01 - Traje e 01 - Algibeira contendo 15po',
        description: 'Você sempre encontra um lugar para atuar, geralmente em tavernas ou estalagens mas, possivelmente em circos, teatros ou até em cortes nobres. Em tais lugares, você recebe alojamento e comida modesta ou de patrõesconfortáveis, de graça (dependendo da qualidade do estabelecimento), contanto que você atue a cada noite. Além disso, sua atuação torna você um tipo de figura local. Quando estranhos reconhecerem você em uma cidade em que você já tenha atuado, eles geralmente gostaram de você.',
        variant: [
            {
                id: 1,
                name: 'Nenhum'
            },
            {
                id: 2,
                name: 'Gladiador',
                description: 'Um gladiador é tanto um artista quanto qualquer menestrel ou artista circense, treinado para tornar as artes do combate em um espetáculo para a multidão poder se divertir. Esse tipo de combate chamativo é sua rotina de artista, apesar de você também dever ter alguma perícia como acrobata ou ator. Usando sua característica Pela Demanda Popular, você pode encontrar um lugar para atuar em qualquer lugar que considere o combate uma forma de entretenimento –talvez uma arena gladiatória ou um clube de luta secreto no subúrbio. Você pode trocar o instrumento musical do seu pacote de equipamentos por uma arma barata, porem incomum, como um tridente ou uma rede.'
            }
        ]
    },

    {
        id: 4,
        name: 'Criminoso',
        variantDescription: 'Variação',
        skills: 'Enganação, Furtividade.',
        tools: 'Um tipo de kit de jogo, ferramentas de ladrão.',
        language: 'Nenhum',
        equipment: '01 - Pé de cabra, 01 - Conjunto de roupas escuras comuns com capuz e 01 - Algibeira contendo 15po',
        description: 'Você possui contatos de confiança que agem como seusinformantes em uma rede criminosa. Você sabe como se comunicar com eles mesmo em grandes distâncias. Você conhece em especial os mensageiros locais, mestres de caravana corruptos, e marinheiros escusos que podem transmitir seus recados.',
        variant: [
            {
                id: 1,
                name: 'Nenhum'
            },
            {
                id: 2,
                name: 'Espião',
                description: 'Embora suas habilidades não sejam muito diferentes de ladrões ou contrabandistas, você as aprendeu e as praticou em um contexto bem diferente: um agente de espionagem. Você pode ser um oficial sancionado pela coroa ou talvez seja só alguém que venda os segredos que descobre pela oferta mais alta.'
            }
        ]
    },

    {
        id: 5,
        name: 'Eremita',
        skills: 'Medicina, Religião.',
        tools: 'Kit de Herbalismo.',
        language: 'Uma a sua escolha',
        equipment: '01 - Estojo de pergaminho cheio de notas dos seus estudos e orações, 01 - Cobertor de inverno, 01 - Conjunto de roupas comuns, 01 - Kit de herbalismo e 5po.',
        description: 'A calma reclusão da seu eremitério prolongado lhe deu acesso a descobertas únicas e poderosas. A natureza exata dessas revelações depende da natureza da sua reclusão. Poderia ser uma grande verdade sobre o cosmos, os deuses, os poderosos seres de outros planos ou as forças da natureza. Poderia ser um local nunca visto por mais ninguém. Você pode ter descoberto um fato que a muito foi esquecido, ou desenterrado uma relíquia do passado que poderia reescrever a história. Poderia ser uma informação que seria prejudicial para as pessoas responsáveis pelo seu exilio, consequentemente, a razão que fez você voltar para a sociedade. Converse com o Mestre para determinar os detalhes da sua descoberta e o impacto na campanha.',
    },

    {
        id: 6,
        name: 'Forasteiro',
        skills: 'Atletismo, Sobrevivência.',
        tools: 'Um tipo de instrumento musical.',
        language: 'Uma a sua escolha',
        equipment: '01 - Bordão, 01 - Armadilha de caça, 01 - Fetiche de um animal que você matou, 01 - Conjunto de roupas de viajante e 01 - Algibeira contendo 10po',
        description: 'Você tem uma memória excelente para mapas e geografia, e você sempre pode recobrar o plano geral de terrenos, assentamentos ou outras características ao seu redor. Além disso, você pode encontrar comida e água fresca para você a até cinco outras pessoas a cada dia, considerando que a terra ofereça bagas, pequenas frutas, água e similares.'
    },

    {
        id: 7,
        name: 'Herói do Povo',
        skills: 'Adestrar animais, sobrevivência.',
        tools: 'Um tipo de ferramenta de artesão, Veiculos terrestres.',
        language: 'Nenhum',
        equipment: '01 - Conjunto de ferramentas de artesão (à sua escolha), 01 - Pá, 01 - Pote de ferro, 01 - Conjunto de roupas comuns e 01 - Algibeira contendo 10po',
        description: 'Já que você ascendeu da categoria de pessoas comuns até onde você está agora, é fácil se misturar a eles. Você pode encontrar lugar entre os camponeses para se esconder, descansar ou se recuperar, a menos que isso ofereça um risco direto a eles. Eles o esconderão da lei e de qualquer um que venha perguntando por você, desde que não tenham que arriscar suas vidas.'
    },

    {
        id: 8,
        name: 'Marinheiro',
        variantDescription: 'Variação',
        skills: 'Atletismo, percepção.',
        tools: 'Ferramentas de navegador, Veiculos aquaticos.',
        language: 'Nenhum',
        equipment: '01 - Malagueta (clava), 15 - Metros de corda de seda, 01 - Amuleto da sorte como um pé de coelho ou uma pequena pedra com um furo no centro (ou você pode rolar uma bugiganga da tabela Bugigangas no capítulo 5), 01 - Conjunto de trajes comuns e 01 - Algibeira contendo 10po',
        description: 'Quando você precisar, você pode conseguir passagem de graça em um navio para você e seus companheiros de aventura. Você precisa viajar no navio em que você trabalhou ou em outro navio com o qual você teve boas 139 relações (talvez um comandado por um ex-companheiro de tripulação). Por ser um favor, você não pode solicitar uma programação ou rota que atenda à todas as suas necessidades. Seu Mestre determina quanto tempo levará pra chegar aonde você quer ir. Em troca da passagem grátis, espera-se que você e seus companheiros ajudem a tripulação durante a viagem.',
        variant: [
            {
                id: 1,
                name: 'Nenhum'
            },
            {
                id: 2,
                name: 'Pirata',
                description: 'Você passou sua juventude sobre o domínio de um pirata infame, um degolador cruel que te ensinou a sobreviver em um mundo de tubarões e selvageria. Você participou de saques em alto-mar e enviou mais de uma alma merecedora para uma sepultura salgada. Medo e derramamento de sangue não são estranhos para você, e você já adquiriu uma reputação um tanto desagradável em várias cidades portuárias.Se você decidir que sua carreira como marinheiro envolve pirataria, você pode escolher a característica Má Reputação ao invés da característica Passagens de Navio.'
            }
        ]
    },

    {
        id: 9,
        name: 'Nobre',
        variantDescription: 'Variação',
        skills: 'Historia, Persuasão.',
        tools: 'Um tipo de kit de jogos.',
        language: 'Um a sua escolha',
        equipment: '01 - Conjunto de trajes finos, 01 - Anel de sinete, 01 - Pergaminho de linhagem e 01 - Algibeira contendo 25po',
        description: 'Graças a sua origem nobre, as pessoas tendem a pensar o melhor de você. Você é bem-vindo na alta sociedade e as pessoas assumem que você tem o direito de estar onde está. As pessoas comuns fazem todos os esforços para acomodá-lo e evitar seu desprazer, e outros nobres o tratam como um membro da mesma classe social. Você pode conseguir uma audiência com um nobre local se precisar.',
        variant: [
            {
                id: 1,
                name: 'Nenhum'
            },
            {
                id: 2,
                name: 'Cavaleiro',
                description: 'A fidalguia, está entre os títulos de nobreza mais baixos na maioria das sociedades, mas ele pode ser o caminho para posições maiores. Se você deseja ser um cavaleiro, escolha a característica Retentores ao invés da característica Posição Privilegiada. Um dos seus plebeus retentores é substituído por um nobre que serve como seu escudeiro, ajudando você em troca de treinamento no próprio caminho dele para a cavalaria. Seus dois retentores restantes podem ser um cavalariço, para cuidar do seu cavalo, e um servo que poli sua armadura (e até mesmo ajuda você a vesti-la).Como um emblema de cavalaria e os ideias de amor cortês, você deveria incluir entre seus equipamentos um estandarte ou outro símbolo de um nobre lorde ou lady a quem você deu seu coração – em uma espécie de voto de castidade. (Essa pessoa pode ser seu vínculo.)'
            }
        ]
    },

    {
        id: 10,
        name: 'Orfão',
        skills: 'Furtividade, Prestidigitação.',
        tools: 'Kit de disfarce, Ferramentas de Ladrão.',
        language: 'Nenhum',
        equipment: '01 - Faca pequena, 01 - Mapa da cidade em que você cresceu, 01 - Rato de estimação, 01 - Pequeno objeto para lembrar dos seus pais, 01 - Conjunto de roupas comuns e 01 - Algibeira contendo 10po',
        description: 'Você conhece os padrões secretos e o fluxo das cidades e pode encontrar passagens através da expansão urbana que os outros deixariam passar. Quando você não estiver em combate, você (e os companheiros que você guiar) podem viajar entre dois locais quaisquer na cidade com o dobro da velocidade normalmente permitida.'
    },

    {
        id: 11,
        name: 'Sábio',
        skills: 'Arcanismo, Historia.',
        tools: 'Nenhum',
        language: 'Dois a sua escolha.',
        equipment: '01 - Vidro de tinta escura, 01 - Pena, 01 - Faca pequena, 01 - Carta de um falecido colega perguntando a você algo que você nunca terá a chance de responder, 01 - Conjunto de roupas comuns e 01 - Algibeira contendo 10po',
        description: 'Quando tentar obter ou recuperar um fragmento de conhecimento que você não saiba, você descobre aonde e com quem pode obter essa informação. Normalmente ela será adquirida em bibliotecas, arquivos de escribas,universidade ou outros sábios e pessoas aptas. Seu Mestre pode decidir que o conhecimento que busca está escondido em algum lugar quase inacessível, ou é simplesmente impossível de se obter. Desvendar os 142 segredos mais profundos do multiverso pode requerer uma campanha inteira.'
    },

    {
        id: 12,
        name: 'Soldado',
        skills: 'Atletismo, Intimidação.',
        tools: 'Um tipo de kit de jogo, Veiculos terrestres.',
        language: 'Nenhum',
        equipment: '01 - Insígnia de patente, 01 - Fetiche obtido de um inimigo caído (uma adaga, lâmina partida ou tira de estandarte), 01 - Conjunto de dados de osso ou baralho, 01 - Conjunto de roupas comuns e 01 - Algibeira contendo 10po',
        description: 'Você possui uma patente militar da sua época como soldado. Soldados leais à sua antiga organização reconhecem sua autoridade e influência, e o prestam deferência se forem de uma patente mais baixa. Você pode invocar sua patente para exercer influência sobre soldados, e requisitar equipamentos simples ou cavalos para uso temporário. Você também pode ganhar acesso a acampamentos militares aliados, e fortalezas onde usa  patente é reconhecida.'
    }
]