import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center bg-gray-200">
      <div className="w-8/12 m-2 mt-10 bg-white rounded shadow ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full p-4 md:w-1/4">
            <Image
              width={1000}
              height={1000}
              alt="logo"
              src="https://images.tcdn.com.br/img/editor/up/942823/logo_morelate_horizontal_a.png"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full p-4 md:w-3/4">
            <p className="text-justify">
              Fundada na cidade de São Paulo em 1988, a
              <strong> MORELATE </strong>
              atua no mercado há 33 anos, quando elegeu a linha de veículos
              pesados da Volkswagen, como seu principal foco de trabalho. Essa
              visão estratégica, que antecipava o crescimento da Volkswagen como
              líder da frota nacional de caminhões, permitiu à
              <strong> MORELATE </strong>
              consolidar-se como expoente sólido desse segmento, criando uma
              imagem de qualidade de atendimento a preços competitivos.
            </p>
          </div>
        </div>
      </div>

      <div className="w-8/12 p-4 m-2 bg-white rounded shadow">
        <div className="flex flex-wrap">
          <div className="w-full p-2 md:w-1/2">
            <Image
              width={1000}
              height={1000}
              alt="image1"
              src="https://images.tcdn.com.br/img/editor/up/942823/1DSC00825.JPG"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full p-2 md:w-1/2">
            <Image
              width={1000}
              height={1000}
              alt="image2"
              src="https://images.tcdn.com.br/img/editor/up/942823/2DSC06836.JPG"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-8/12 p-4 m-2 bg-white rounded shadow">
        <p className="text-justify">
          O principal Centro de Distribuição da
          <strong> MORELATE </strong>
          está localizado no município de São Paulo, próximo ao eixo rodoviário
          da Anhanguera, com uma área construída de 20.000 m², própria, que
          abriga escritórios, garagens e estoques, além de uma central de
          atendimento, compras e vendas. Seus estoques abrigam mais de 80.000
          itens, o que exige uma ampla gama de fornecedores, permitindo o
          atendimento imediato da maioria das marcas e modelos de caminhões
          pesados e médios comercializados no Brasil. Sua equipe de 240
          colaboradores mescla profissionais experientes com jovens talentos,
          garantindo a continuidade de um conhecimento especializado, por tipos
          e marcas de veículos, em uma constante atualização e inovação.
        </p>
      </div>

      <div className="w-8/12 p-4 m-2 bg-white rounded shadow">
        <Image
          width={1000}
          height={1000}
          alt="mvv"
          src="https://imagens.morelate.com.br/banner_mvv.png"
          className="w-full h-auto"
        />
        <div className="flex flex-wrap mt-4 text-center">
          <div className="w-full p-2 md:w-1/3">
            <h3 className="text-lg font-bold">MISSÃO</h3>
            <p className="text-sm">
              Atender nossos clientes na produção e comercialização de peças
              para o segmento de veículos utilitários, médios, semipesados e
              pesados, com preços competitivos, qualidade superior, excelência
              nos serviços e eficiência no pós-venda, maximizando valor para
              nossos clientes, funcionários e acionistas.
            </p>
          </div>
          <div className="w-full p-2 md:w-1/3">
            <h3 className="text-lg font-bold">VISÃO</h3>
            <p className="text-sm">
              Ser empresa e uma marca de referência, reconhecida como a melhor
              opção por clientes, colaboradores, comunidade, fornecedores e
              investidores, devido à qualidade de nossos produtos, serviços e
              relacionamento, implementando constantemente soluções técnicas
              para nosso segmento.
            </p>
          </div>
          <div className="w-full p-2 md:w-1/3">
            <h3 className="text-lg font-bold">VALORES</h3>
            <p className="text-sm">
              Integridade, comprometimento, qualidade, valorização humana,
              ética, superação de resultados, melhoria contínua, inovação,
              sustentabilidade.
            </p>
          </div>
        </div>
      </div>

      <div className="w-8/12 p-4 m-2 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-green-600">
          POLÍTICA DA QUALIDADE
        </h2>
        <p className="mt-4 text-justify">
          O <strong>GRUPO MORELATE</strong>, atuando na produção e
          comercialização de autopeças nacionais e importadas para o segmento de
          veículos utilitários, médios, semipesados e pesados estabelecem os
          seguintes princípios:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li>
            Atender as necessidades dos clientes de forma eficaz e satisfatória,
            bem como outros requisitos aplicáveis.
          </li>
          <li>Promover a melhoria contínua.</li>
          <li>
            Definir os objetivos da qualidade e trabalhar para atingi-los
            através dos nossos recursos e especialmente através das competências
            dos nossos colaboradores.
          </li>
        </ul>
      </div>

      <div className="w-8/12 p-4 m-2 bg-white rounded shadow">
        <a href="https://imagens.morelate.com.br/Certificado-ISO9001-2015-Morelate-Maxi-Parts-2023.pdf">
          <Image
            width={1000}
            height={1000}
            alt="ISO Certificate"
            src="http://imagens.morelate.com.br/banner_iso.png"
            className="w-full h-auto"
          />
        </a>
      </div>

      <div className="w-8/12 p-4 m-2 bg-white rounded shadow">
        <p className="text-justify">
          Passados alguns anos, essa liderança da linha Volkswagen lhe
          possibilitou participar do fornecimento de outras marcas, tais como
          Ford, Scania, Mercedes, Volvo e Agrale, elevando a{" "}
          <strong>MORELATE</strong>, nos últimos dez anos, às cinco maiores do
          seu segmento, em toda a América do Sul. Com uma sólida estrutura, a{" "}
          <strong>MORELATE</strong> possui atualmente 9 unidades de distribuição
          (CDs) onde atende todo o território nacional e sul americano, confira
          abaixo:
        </p>
      </div>

      {[
        {
          img: "https://imagens.morelate.com.br/matriz.jpg",
          title: "MATRIZ - SP",
          email: "sac@morelate.com.br, morelate@morelate.com.br",
          phone: "(11) 3908-0060",
          address:
            "Rua Venâncio Diniz Junqueira, 327 - São Domingos - São Paulo - SP - CEP: 05160-060",
          map: "https://goo.gl/maps/Tn3xnk8faBDyV8Vv9",
        },
        {
          img: "https://imagens.morelate.com.br/filial_aracatuba.jpg",
          title: "ARAÇATUBA - SP",
          email: "eduardo.lazzari@morelate.com.br",
          phone: "(18) 3621-8026",
          address:
            "Rua Anhanguera, 1277 - Jardim Brasília - Araçatuba - SP - CEP: 16025-507",
          map: "https://goo.gl/maps/TUqBW3446Rs6Toz1A",
        },
        {
          img: "https://imagens.morelate.com.br/filial_sjc.jpg",
          title: "SÃO JOSÉ DOS CAMPOS - SP",
          email: "fabio.bicalho@morelate.com.br",
          phone: "(12) 3308-0936",
          address:
            "Rua Loanda, 943 ao 953 - Chácaras Reunidas - São José dos Campos - SP - CEP: 12238-330",
          map: "https://maps.app.goo.gl/6rjFekrEQA3agZ2y8",
        },
        {
          img: "https://imagens.morelate.com.br/filial_rio_de_janeiro.jpg",
          title: "RIO DE JANEIRO - RJ",
          email: "lucas.testi@morelate.com.br",
          phone: "(21) 2672-9046",
          address:
            "Rodovia Washington Luiz, 5680 - Jardim Gramacho - Duque de Caxias - RJ - CEP: 25065-007",
          map: "https://maps.app.goo.gl/F834p4o7J3AcqFVB6",
        },
        {
          img: "https://imagens.morelate.com.br/filial_betim.jpg",
          title: "BETIM - MG",
          email: "paulo.henrique@morelate.com.br",
          phone: "(31) 3665-6178",
          address:
            "Rua Quintino Bocaiúva, 295 - Filadélfia - Betim - MG - CEP: 32670-332",
          map: "https://maps.app.goo.gl/S5X6arCDV1y3wbZ16",
        },
        {
          img: "https://imagens.morelate.com.br/filial_caxias.jpg",
          title: "CAXIAS DO SUL - RS",
          email: "eliseu.pereira@morelate.com.br",
          phone: "(54) 3290-4000",
          address:
            "Avenida Rubem Bento Alves, 5027 - Mal. Floriano - Caxias do Sul - RS - CEP: 95030-325",
          map: "https://goo.gl/maps/M5qksegFE5hqa8Y5A",
        },
        {
          img: "https://imagens.morelate.com.br/filial_petrolina.jpg",
          title: "PETROLINA - PE",
          email: "lindomar.medeiros@morelate.com.br",
          phone: "(94) 3324-5304",
          address:
            "Avenida Sete de Setembro, 750 - Jardim Maravilha - Petrolina - PE - CEP: 56330-480",
          map: "https://maps.app.goo.gl/HgM3RqB6g14ukUsj6",
        },
        {
          img: "https://imagens.morelate.com.br/filial_recife.jpg",
          title: "RECIFE - PE",
          email: "neide.guimaraes@morelate.com.br",
          phone: "(81) 3375-8500",
          address:
            "Avenida Mascarenhas de Moraes, 291D - Imbiribeira - Recife - PE - CEP: 51150-000",
          map: "https://maps.app.goo.gl/utVXJndSe7kwY9ZMA",
        },
        // {
        //   img: "https://images.tcdn.com.br/img/editor/up/942823/filial_rio_de_janeiro.jpg",
        //   title: "RIO DE JANEIRO - RJ",
        //   email: "reginaldo.pereira@morelate.com.br",
        //   phone: "(21) 3472-2002",
        //   address: "Estrada do Porto Velho, 241 - Campo Grande - Rio de Janeiro - RJ - CEP: 23092-295",
        //   map: "https://goo.gl/maps/MHLeUbifQdH2"
        // },
        // {
        //   img: "https://imagens.morelate.com.br/filial_rondonopolis.jpg",
        //   title: "RONDONÓPOLIS - MT",
        //   email: "wagner.souza@morelate.com.br",
        //   phone: "(66) 3421-4457",
        //   address: "Rua Antenor Thomé, 2222 - Jd. Santa Marta II - Rondonópolis - MT - CEP: 78730-310",
        //   map: "https://goo.gl/maps/xKUmjFNmj2G2"
        // }
      ].map((location, index) => (
        <div key={index} className="w-8/12 p-4 m-2 bg-white rounded shadow">
          <div className="flex flex-col md:flex-row">
            <div className="w-full p-2 md:w-1/3">
              <Image
                width={1000}
                height={1000}
                alt={location.title}
                src={location.img}
                className="w-full h-auto rounded-lg md:max-h-56 lg:max-h-96"
              />
            </div>
            <div className="w-full p-2 md:w-2/3">
              <h3 className="text-xl font-bold">{location.title}</h3>
              <div className="flex flex-wrap lg:py-2">
                <p className="mr-2 font-bold">Email:</p>
                <p>{location.email}</p>
              </div>
              <div className="flex flex-row lg:py-2">
                <p className="mr-2 font-bold">Telefone:</p>
                <p>{location.phone}</p>
              </div>
              <div className="flex flex-wrap wrap lg:py-2 lg:mb-4 md:mb-4 sm:mb-0">
                <p className="mr-2 font-bold">Endereço:</p>
                <p>{location.address}</p>
              </div>
              <a
                href={location.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visualizar no mapa
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
