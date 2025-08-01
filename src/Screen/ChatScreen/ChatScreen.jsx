import React from "react";
import MessageList from "../../Components/MessageList/MessageList";
import { useState } from "react";
import { useParams } from "react-router";
import { getContactById } from "../../Services/ContactService";
import { SendMessage } from "../../Components/SendMessage/SendMessage";
import './ChatScreen.css'
import "../../index.css"
import { ChatHeader } from "../../Components/ChatHeader/ChatHeader";

const ChatScreen = () => {
// Paso 1) Obtener el :contact_id de la url
// Paso 2) Buscar el contact por su contact_id
// Paso 3) Cargar el contact.messages al estados de mensajes


// Paso 1: obtener el :contact_id de url como propiedad de objeto

// te devuelve un objeto con el parametro de busqueda como propiedad (el valor que viene en la url) 
// el valor es de TIPO STRING
const {contactId} = useParams()

// Paso 2: buscas el contacto en la lista
const contact = getContactById(contactId)

if(!contact){
  return <h1>El contacto no existe</h1>
}


// Paso 3: pasamos la lista de mensajes del objeto al estado
// lo inicializamos con un array en este caso ya viene precargado, nos devuelve una variable con el array y una funcion para actualizarlo
    const [mesages, setMessages] = useState(contact.message);
    
    const deleteMessageById = (message_id) => {
        // // logica para actualizar el estado de mensajes eliminando el mensaje con el id recibido

        // // 1. creas un array vacio inicialmente, para recorrer la lista de mensajes (estado) y agregar a los mensajes que sean de id distinto al id recibido
        // const mensajes_diferentes_al_id = []
        // for(const mensaje of mesages){
        //     // si es diferente al id del mensaje que queremos eliminar lo agregamos
        //     if(mensaje.id !== message_id){
        //         mensajes_diferentes_al_id.push(mensaje)
        //     }
        // }
        // // actualizamos el estado del componente, ahora va a contener la nueva lista actualizada 

//-------------------------------------------------------------------
    // FILTER:
    // es un metodo avanzado de arrays que permite filtrar un array 
    /*Elige ciertos elementos de un array bajo una x condicion y devuelve un array nuevo
    con los elementos que haya cumplido la condicion. */

    // devuelve un nuevo array
    // recorre cada elemento del array y ejecuta la callback, la CALLBACK es la condicion. Si devuelve verdadero se agrega el elemento, sino no se agrega
    const new_message_list = mesages.filter((elemento)=>{
      return elemento.id !== message_id
    })
        setMessages(new_message_list)
    }

    const deleteAllMessage = () => {
      setMessages([])

    }

    // recibimos el texto del mensaje
    const addNewMessage = (text_message) => {
      // va a ser un nuevo objeto
      const new_message = {
        id: mesages.length + 1,
        emisor: 'YO',
        receptor: 'El',
        texto: text_message,
        hora: new Date().toLocaleTimeString(),
        status: 'no visto'
      }

      // clonar la lista de mensajes porque mesages es un ESTADO y no podes modificar como si nada un ESTADO (para agregarlo a la lista) 
      const clon_messages_list = [...mesages]

      // agrego el objeto a la nuea lista y actualizo el estado (verse el cambio en pantalla)
      clon_messages_list.push(new_message)
      setMessages(clon_messages_list)

    }

    // maneja el evento de enviar el formulario
    const handlesubmitSendMessageForm = (event) => {
      event.preventDefault()
      const text_message = event.target.message.value
      // de que elemento se produjo el evento submit? event.target = <form></form>
      // de ese <form></form> accedo al elemento message osea <input/>
      // accedo al valor (value) de ese <input/>

      addNewMessage(text_message)
      event.target.message.value = ""


    }




    return (
      <div>
        <header className="chat__header">
          < ChatHeader contact={contact} />
        </header>

        <section className="chat__screen">
          {/* hace una condicion, si es verdadero se agarra la segunda condicion, 
          si es falso se agarra el primer valor, pero al ser falso no se muestra en pantalla */}
          {
            mesages.length > 0 &&  <button className="chat__screen-delete" type="button" onClick={deleteAllMessage} >Borrar todos los mensajes</button>
          }
            <MessageList message ={mesages} deleteMessageById={deleteMessageById}/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, doloribus mollitia. Vero accusamus accusantium doloremque quod, voluptatibus maxime reprehenderit corrupti sit animi est nihil quos fuga eos dolores quisquam adipisci.
              Porro fugit repudiandae nulla animi ad aspernatur exercitationem maiores, similique, unde quasi dicta aut magnam quibusdam qui quisquam in quia, quidem laborum! Incidunt corporis ipsum porro est et quia eum!
              Laudantium, reprehenderit incidunt! Inventore quidem eaque quam quas esse, quae velit blanditiis cupiditate? Blanditiis placeat qui enim! Dolore iusto possimus qui nulla dolores nesciunt. Voluptatum velit dicta suscipit quos maxime?
              Magnam 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam neque, placeat dolor repellendus deleniti suscipit, nam quam dignissimos recusandae voluptate. Soluta molestias hic quod optio eius delectus porro vitae.
              Dolorum obcaecati molestiae sint error. Error tempore eligendi facilis velit explicabo, voluptate quas asperiores nihil itaque facere sequi, magnam animi assumenda nam laborum in. Qui similique velit officiis aut ipsum?
              Eaque amet voluptatibus dolorem adipisci explicabo minus itaque voluptas magni maiores quaerat autem, a necessitatibus ex tempora quibusdam consequatur, officia harum ipsum iste veniam quidem sequi quia! Eos, eius impedit!
              Corporis distinctio dignissimos alias saepe est excepturi repellat provident aliquam nulla nostrum consequuntur, temporibus quam. Doloribus facere ratione nulla tempore! Dicta numquam deserunt laboriosam sunt! Nam architecto consequuntur ex et?
              Numquam adipisci reiciendis consectetur, nostrum quisquam eum laborum veniam amet nesciunt animi provident ipsum repellat libero sunt optio dolorum, molestias quam temporibus voluptate quod veritatis nemo qui recusandae corrupti! Sit.
              Similique et vitae explicabo saepe officia vel laboriosam quae aliquid illum fugit aperiam, porro itaque quas, nesciunt beatae dignissimos ipsum iure enim id cum? Eligendi eveniet officiis nesciunt quis vitae!
              Officiis, necessitatibus possimus cupiditate laudantium tempore repellat ab ipsum obcaecati odio cum corrupti provident id neque porro iusto fugiat saepe eveniet molestias quaerat. Similique commodi eaque nihil impedit et possimus.
              Perferendis exercitationem nobis numquam quidem dolorem inventore corrupti qui maiores, sapiente, itaque eaque, tempora quasi suscipit a libero quas explicabo neque molestias non vel? Odio quia nam accusantium tenetur in!
              Ducimus blanditiis quia, nemo commodi ex, autem asperiores libero sed voluptates facere quos quaerat eveniet exercitationem et at veritatis. Totam, a. Consectetur dolores minima deserunt blanditiis reiciendis ad fuga veniam?
              Impedit beatae vero id ratione aliquid modi totam consequatur porro fugiat corrupti dolorem placeat fugit nobis aspernatur, possimus velit incidunt nesciunt reiciendis saepe laudantium accusantium maxime vitae magnam! Recusandae, magni!
              Debitis nostrum porro iste delectus fugit omnis natus blanditiis magnam voluptatem ipsa rem nulla, illum accusamus, nobis suscipit perferendis aliquam? Magni consequatur dolor magnam dolore recusandae at dolores libero soluta.
              Distinctio vel quod ut in, ea earum, blanditiis laboriosam reiciendis doloremque saepe obcaecati magnam asperiores labore, a sint est enim accusamus voluptatum iusto veniam molestias aperiam. Libero tenetur eos provident.
              Incidunt, maxime accusamus totam architecto quos vero nostrum perferendis nam dolorum minus, doloribus minima dignissimos, cum quam dolor. Voluptatum earum saepe, ut illo neque maxime nulla vitae quis obcaecati veritatis!
              Et error repellendus excepturi optio blanditiis quaerat dolor quibusdam corporis cumque voluptate unde possimus, incidunt quas? Beatae iste expedita unde, deleniti asperiores distinctio laborum officiis optio quas. Dolorem, ex animi.
              Facere rem fugit voluptatibus blanditiis aliquid deleniti voluptatum, eligendi minima inventore eum. Velit, molestiae dicta! In non aspernatur, recusandae minima quas iusto adipisci, nostrum dolor et mollitia pariatur consectetur alias!
              Quas non inventore eligendi quod nisi! Est repellendus doloribus error obcaecati. Voluptatum, impedit ut. Accusamus officia, voluptate natus vero provident dolor labore libero ullam dignissimos, at distinctio minima iure tempore?
              Labore porro ratione aliquam, vel, obcaecati exercitationem, iusto facere ullam quis eos accusantium temporibus? Eum repellat officiis eos at suscipit. Nihil maiores porro ullam expedita fuga maxime animi dicta eaque.
              Mollitia nesciunt nobis amet laboriosam, atque doloribus, ullam nemo quibusdam quod earum magni nam, iste eum. Itaque ipsum nisi a fuga quibusdam! Placeat dolorem error quas ipsum odio cupiditate quod?
              Facere impedit ullam non quaerat tenetur quasi doloremque aliquam id perspiciatis excepturi, obcaecati vel! Assumenda sit ullam iste quam aliquam et, sequi quidem, doloribus quis soluta molestiae veniam magnam. Iure.
              Ipsam maiores cumque mollitia! Expedita eius doloremque deleniti quia sunt, odio nostrum iure similique illum inventore quam nesciunt aperiam fuga voluptatum dolore cumque repudiandae quisquam. Necessitatibus consequatur magnam dolorum nobis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati quasi mollitia! Veniam labore repellat officia quidem iste soluta iusto inventore voluptatum aut accusantium totam nihil aliquam, repellendus id facere?
              Quidem hic et id. Autem explicabo est ratione ut vero illo ipsam vitae alias fuga aperiam, qui eum soluta facilis minus dicta similique molestiae laudantium, blanditiis voluptas? Excepturi, consequatur quisquam.
              Aliquid, maiores amet vel libero commodi nostrum nobis numquam blanditiis iste quas alias accusamus accusantium, exercitationem vero aperiam praesentium excepturi unde debitis, veritatis doloribus incidunt quos! Vitae corrupti eum dolor.
              Repellat voluptate nihil voluptatem, magni iste labore ex similique, autem, recusandae dignissimos quo distinctio ducimus voluptatum fugiat accusantium! Nobis corporis id reiciendis magni fugit velit temporibus perspiciatis atque esse rem?
              Id, voluptatem veritatis quae dolore nihil dolorum cum doloribus nulla facere fuga esse! Voluptatum, voluptas doloribus. Id, doloribus laboriosam sit eum alias molestiae, ex sed mollitia nisi perspiciatis beatae! Neque?
              Nesciunt veritatis excepturi quas sed molestias aperiam eaque soluta perspiciatis! Quidem quaerat dolorum iusto officiis odit beatae ullam facilis hic eum necessitatibus itaque, nihil sapiente doloremque repudiandae mollitia neque enim.
              Quidem, repudiandae nesciunt. Optio quidem illo aut accusantium quo eum in facere. Pariatur alias, sequi repellendus atque perferendis a quod earum debitis dolor nemo! Alias quos nesciunt culpa aut hic!
              Tempore, ad assumenda alias autem libero mollitia sapiente a debitis hic atque aliquam veritatis non consequuntur necessitatibus. Cumque dicta exercitationem assumenda? Velit eveniet mollitia veritatis, ad maiores vero placeat quis.
              Recusandae sit vero nihil facere odit unde voluptas blanditiis excepturi voluptates? Deleniti nostrum incidunt cupiditate esse vel odio impedit explicabo aut! Distinctio, doloremque odit excepturi molestiae expedita possimus neque odio.
              Officiis earum sunt amet voluptate! Nihil, blanditiis illum cupiditate, consectetur consequuntur cum doloribus adipisci porro repudiandae autem distinctio enim pariatur? Quae ut aliquid, maxime error sed dolorem tenetur accusantium veniam?
              Itaque atque labore debitis odit autem quis doloribus voluptas earum esse harum. Eligendi accusamus necessitatibus expedita iusto vero, laudantium omnis, eius animi odit quasi assumenda sed ea ducimus nemo deserunt.
              Quae facere saepe adipisci eos tempora aperiam rem sequi excepturi reiciendis assumenda, eius laborum, consequatur aliquid officia omnis, distinctio doloremque accusantium veniam similique deserunt impedit perspiciatis sunt expedita. Repudiandae, aperiam.
              A ipsa dolorum sequi earum, voluptate voluptas aperiam eveniet aliquam laboriosam porro quidem natus maxime commodi dicta? Tenetur nihil aliquid quaerat rerum adipisci, ducimus assumenda quia expedita, consequatur architecto distinctio!
              Numquam architecto labore velit commodi quaerat libero earum maiores reprehenderit quae aut laudantium illum, rerum assumenda voluptates itaque quas omnis nulla ducimus facilis laborum, quos asperiores esse! Aliquam, molestias provident.
              Vero aut quae maiores asperiores veritatis tenetur consequuntur esse possimus hic necessitatibus voluptates blanditiis, commodi facilis doloribus, eaque ipsam voluptas, libero similique! Repudiandae placeat quis recusandae debitis eveniet fuga temporibus.
              In a quam ducimus perferendis, odio corrupti, recusandae provident libero minima aliquam doloribus nihil, consequatur aut suscipit non deserunt rerum veniam eveniet velit beatae asperiores nesciunt impedit! Aliquam, tempora dolores.
              Mollitia, dicta rem dolorum inventore velit minima maiores assumenda quaerat nostrum illum sunt et ducimus vero cupiditate officiis, labore unde possimus similique reiciendis qui harum commodi obcaecati facere eius? Quae?
              Amet, aspernatur provident quae aperiam repudiandae atque beatae voluptatibus, quas molestias minima inventore laborum, aut excepturi ipsum nihil. Quisquam consectetur debitis quibusdam dignissimos repellendus odit error expedita suscipit beatae cumque?
              Voluptate laboriosam aperiam enim natus. Quos enim quia velit sapiente! Labore ipsa magni, minima officiis dolorum, vel rerum commodi, dolore at temporibus quidem saepe laborum doloremque? Quos omnis similique repudiandae!
              Cumque inventore quae perferendis qui dolorum reiciendis architecto debitis commodi minima corporis accusamus culpa distinctio facere libero, unde optio tempore doloremque magnam animi rerum itaque. Accusamus sapiente et totam quos?
              Aliquam quaerat ea omnis, tenetur dignissimos ut fugit? Ipsam repellendus quo repellat aliquid aliquam quam, quidem deserunt eius suscipit dicta. At excepturi libero quae dicta ex. Voluptatem magni illo eum!
              Ab perspiciatis esse quod iste ratione praesentium eum suscipit! Beatae nemo suscipit sunt quasi! Provident, omnis distinctio. Ut recusandae blanditiis, voluptatum sit omnis temporibus. Voluptate suscipit cupiditate autem eum iste.
              Nam, non itaque! Alias dolores magni nihil nemo. Consequatur reiciendis veniam aperiam, blanditiis fuga obcaecati minus voluptatem placeat repellendus, maxime sint officia maiores laboriosam corrupti doloribus iusto nam ducimus. Laboriosam!
              Ipsam dicta enim vel dolor officiis similique amet, ipsum ad vitae facilis eaque exercitationem odio sapiente doloremque autem eligendi ullam! Ducimus blanditiis consequatur ad a voluptatibus inventore, aliquam esse expedita!
              Perferendis exercitationem culpa nesciunt dolorum porro sed nemo neque eveniet ipsum architecto praesentium totam consectetur, alias labore sapiente placeat quasi numquam ea adipisci quam! Libero suscipit adipisci quisquam neque facere.
              Ipsam velit rerum minus quis sapiente illum dolorem harum, quo ea esse totam quibusdam earum fugiat non quidem ad sequi aut magnam veniam commodi! Ad dolores velit reiciendis reprehenderit unde?
              Atque provident dolor ut vitae itaque quis, iure beatae, mollitia nihil adipisci error vel, sed aut voluptatibus est! Expedita consequuntur sit nemo dicta quis dolor aliquid velit quia impedit accusamus?
              Architecto vel maxime repudiandae, sit nulla, voluptatum voluptatem provident cum modi illo quasi veniam repellat, aliquid dolore nesciunt odit earum nihil adipisci voluptates id. Optio quaerat architecto reiciendis corrupti temporibus?
              Vero unde nulla voluptatum molestiae repudiandae ipsum assumenda quasi doloribus ad explicabo dignissimos, nisi, animi officiis ratione similique eum quo dolorem, asperiores reiciendis aperiam labore error veritatis adipisci quisquam! Illum.
              Obcaecati quaerat illum aperiam nobis maiores optio quisquam veniam, incidunt rem atque fugit est consequatur perspiciatis vitae maxime, nisi et eius officiis quia corporis totam ad voluptates! Delectus, alias aperiam?
              Expedita velit optio, eum earum ut ab? Facere ut excepturi nobis pariatur placeat, voluptatum ducimus aliquam neque modi molestias cupiditate adipisci iste dolores! Voluptatibus, harum. Maiores voluptatibus cumque nobis ab.
              Ipsa porro quia est earum cupiditate mollitia quisquam eius magni ducimus vel, suscipit fugit numquam odio cum perferendis itaque modi, sint harum? Sit quae dolor cumque enim asperiores ad eius.
              Voluptatem suscipit tenetur adipisci esse autem minima minus repudiandae, nam veritatis culpa eveniet, voluptatum qui exercitationem voluptatibus, facere illo porro eos harum architecto cum dolore voluptate libero dolorum impedit! Repudiandae!
              Reiciendis possimus quam laboriosam dolore, est labore nulla commodi impedit laborum nemo nesciunt sit asperiores voluptas autem sapiente reprehenderit aliquam obcaecati tempore debitis doloribus consequatur, dolores cum. Repudiandae, enim saepe?
              Temporibus provident iure cum accusantium, quidem dolor laboriosam sed officiis doloremque facere pariatur. Consequatur maiores ad, quos eius quas magni eveniet eos blanditiis omnis laboriosam alias, repellat expedita. Quas, dolores!
              Omnis ipsa inventore quae quaerat perspiciatis earum accusamus? Quos maxime ut sit eum exercitationem voluptatem quod incidunt ad? Adipisci officia harum debitis ullam minima sunt ratione ea iusto necessitatibus. Repudiandae!
              Eius asperiores nulla commodi beatae iste ipsa provident error optio molestias, totam veniam consequuntur quis tempore! Fuga incidunt eaque iusto asperiores sapiente, laboriosam nesciunt officiis. Repudiandae laborum voluptas sequi temporibus.
              Ipsam, animi, autem modi labore facere assumenda quaerat obcaecati voluptate saepe vitae officia repellat quae voluptas deleniti non soluta porro unde! Repudiandae magni magnam sunt molestias atque voluptates, unde ipsa!
              Rem quo suscipit, vero asperiores eius culpa optio, harum cupiditate delectus cumque quidem, sed minima quas repellat ratione eum a voluptatibus alias praesentium vitae quis iusto nesciunt! Sunt, qui nobis.
              Aspernatur iste odio cumque, nesciunt sed a ratione unde dolore magnam ut distinctio, accusamus quaerat vel iusto eligendi consequuntur consequatur rem perspiciatis numquam porro, ad cum. Placeat, accusamus. Incidunt, magnam!
              Natus aliquid provident quidem, aliquam non error blanditiis, quis nisi architecto maiores sit a! Ullam rem similique amet incidunt dolore in odit quas, ipsam dolorum eum, aperiam quos, ducimus ea.
              Praesentium quos quae sunt, velit, adipisci voluptate quis quaerat deleniti quibusdam optio recusandae atque dolor delectus soluta sequi laborum sit et laboriosam quo minus quasi. Veritatis porro nisi voluptatum perspiciatis!
              Nobis eum eveniet ullam autem, totam cumque neque, inventore excepturi nulla molestias officia nostrum deserunt, quisquam error debitis ipsa quo rem nemo repellendus sapiente! Dicta laborum qui nostrum sit quos!
              Animi provident minus dolorem deleniti natus officia vel vitae labore harum! Voluptas libero architecto accusantium, minus nam aperiam qui dignissimos quod quis tenetur blanditiis excepturi nostrum deleniti tempora ipsum iusto.
              Corporis ipsa praesentium, quae sequi mollitia tempore rerum assumenda esse nobis rem laboriosam repellat iste expedita quam beatae, consectetur molestiae harum eius quibusdam explicabo, quod doloribus quidem aliquid ad. Error?
              Neque, culpa tempora maiores officiis ut expedita? Sunt ipsam modi esse voluptatem, qui magni. Cum laboriosam repellendus autem animi accusantium magni blanditiis quas illum fugiat? Aliquid dolorem commodi excepturi natus.
              Ipsum voluptatem omnis eum, animi quibusdam ducimus enim aut eius incidunt. Nemo, doloribus harum velit voluptatibus voluptates magni officia dignissimos, ipsum sapiente tempora suscipit reprehenderit molestias ut debitis laboriosam cupiditate.
              Consequatur dignissimos expedita eaque natus dolor deleniti itaque cumque nostrum. Qui quo sint sapiente animi, assumenda atque! Iusto enim animi dicta quam magnam molestiae quae corrupti, velit aut, nesciunt asperiores.
              Neque, enim ad odit explicabo ipsa rerum repellat voluptatem modi amet maxime commodi cupiditate consequatur facilis ut, placeat eum consectetur incidunt eligendi a nemo doloribus aut provident? Quam, tempora minus?
              Rerum quos ea asperiores vel deserunt quis aut dolore ratione provident molestias maiores, nihil corporis. Enim dolores deserunt, consequatur similique non in dignissimos natus, reiciendis nobis, quod maiores soluta! Deserunt?
              Voluptatem doloremque itaque quisquam saepe assumenda, explicabo corrupti possimus dolor repudiandae nihil ad rem totam dolorem ut temporibus maiores quos cum soluta eaque! Sequi asperiores obcaecati adipisci, rerum modi corporis!
              Iste alias repellat, ratione quo non perspiciatis illo quos corrupti dolore, placeat obcaecati. Ad fugiat laudantium assumenda amet itaque voluptatum quia dolorem provident tenetur, esse libero quidem, voluptas earum quo?
              Praesentium dolore eveniet, laboriosam error facilis perferendis animi delectus alias quam architecto debitis quia assumenda libero minima necessitatibus expedita accusamus quas excepturi atque corporis ut. Sunt necessitatibus pariatur fuga quod.
              Officiis ipsum ea amet magnam delectus cumque, ut, officia iure quidem soluta harum. Nesciunt velit quod sequi voluptatem perferendis incidunt dolor! Molestiae assumenda qui praesentium cupiditate repudiandae dignissimos enim pariatur.
              Atque quisquam ut iure aspernatur suscipit placeat voluptates eius recusandae magni distinctio! Quae, temporibus. Alias cum dolore nobis numquam magni voluptatum repellat molestiae cumque dignissimos, voluptas, obcaecati tempora, earum maiores.
              Reprehenderit inventore iure quia rem. Exercitationem minus consequuntur, inventore veritatis accusantium voluptates totam fuga, nam, eos nobis iste facere dolor est architecto ratione ducimus! Ipsam velit corrupti consequuntur debitis praesentium.
              Omnis ut explicabo libero voluptate est et facilis magni nesciunt eligendi culpa illum eos earum obcaecati, aliquid atque inventore minus vero! A alias reprehenderit, ratione ipsum voluptas quidem iste similique?
              Eos, numquam. Maiores error excepturi vel exercitationem? Quisquam quia praesentium eum, porro, quis expedita voluptatum nihil officia fugiat eius nostrum? Vel quasi provident totam deleniti nesciunt assumenda ipsum illum consequuntur.
              Sed vero ex eaque odio incidunt perspiciatis dignissimos ipsam, eum, perferendis dolorem aspernatur voluptates nemo quaerat, similique id inventore commodi? Mollitia, dicta illo aspernatur sit quod maxime quae eligendi porro!
              Nisi similique illum beatae voluptas ipsum dolore sunt fugit laudantium sed, commodi animi nulla delectus fugiat aliquid nam ad architecto, possimus eligendi. Quisquam dolore unde eius provident, doloribus nostrum maiores!
              Quas est at ab nostrum sapiente, minima totam, nesciunt vitae voluptas laboriosam sequi iusto dicta? Architecto eligendi deleniti minima obcaecati sequi! Deserunt ad hic dolorum alias tenetur totam sit facilis?
              Eos deserunt dicta, vel accusantium nulla rem officiis fugiat fuga odit consequuntur animi et. Fugiat aliquam, animi at laudantium inventore consectetur neque facere magni non labore sapiente atque, dolore cumque.
              Quis nisi harum perspiciatis? Provident expedita earum illum. Excepturi adipisci voluptate quas dolorem dicta maxime fugit blanditiis dolor numquam quidem, voluptatem, sit fugiat iste id laboriosam ipsum obcaecati in incidunt.
              Magni ratione, quo exercitationem quos perspiciatis recusandae suscipit vero natus odio? Officiis veniam ducimus delectus sapiente temporibus. Pariatur dignissimos, animi, quam sunt harum eos error, quisquam officiis inventore in adipisci.
              Magnam deleniti laudantium laborum unde quo sed exercitationem suscipit ea quam, fugit est qui, culpa nihil, illum et illo voluptatibus! Quae obcaecati porro aliquam necessitatibus numquam doloremque doloribus officia? Iusto?
              Vitae, voluptates unde eum incidunt facilis ab impedit error temporibus iste similique nostrum, corrupti necessitatibus voluptatum dicta aperiam magnam. Nostrum, corrupti. Repudiandae, nemo tenetur consequatur consectetur adipisci fugiat nesciunt recusandae.
              Necessitatibus aut ad non eos animi. Dolorem, ducimus facilis. Aut natus amet ex quisquam qui odio! Libero commodi eaque deserunt. Modi optio sunt, ipsa libero nostrum consequatur ullam totam delectus!
              Nostrum tempore, dignissimos inventore iste magnam non adipisci ex eum cupiditate? Enim nesciunt repellendus, nam eveniet magni accusantium impedit ut officiis corporis quas in exercitationem at reprehenderit suscipit debitis neque.
              Repellat, earum eligendi? Natus modi aperiam ad perferendis recusandae ipsam fugiat sunt aliquam expedita, temporibus, culpa aut sapiente, qui sit in inventore! Molestiae vero quo consequuntur id tempora impedit aperiam!
              Tempore voluptas illum doloremque nihil laboriosam exercitationem ad similique modi, sit qui harum. Distinctio praesentium cumque reiciendis tempore qui optio officiis molestias, corporis quasi dolorem est accusantium repellat incidunt recusandae.
              Inventore, distinctio maxime soluta explicabo magnam beatae officia laudantium ut aut dolore cum porro modi accusantium rem blanditiis at impedit qui totam assumenda enim aperiam ratione quas! Cupiditate, deserunt velit!
              Consequuntur, nisi! Sint dignissimos accusantium, ducimus, provident a incidunt repellendus amet quas nemo, nisi aliquam beatae. Amet officiis veritatis facilis autem nostrum maxime debitis modi, dolorem fuga, nobis voluptatem sunt!
              Maxime eius, praesentium repudiandae quibusdam nam perferendis, repellat velit iste aut reprehenderit cum libero eveniet dicta? Commodi odio cupiditate molestias aut atque, laboriosam ipsa id dicta sunt ut? Accusamus, voluptates.
              Quo veniam minus perferendis distinctio. Eos, laudantium eius dignissimos blanditiis doloremque ipsum hic asperiores deleniti, tempora laborum voluptatem odio enim ipsa vero architecto voluptatum et ad labore est qui nisi!
              Placeat, praesentium itaque, quam dolor a alias beatae nostrum nulla harum, error porro earum in maiores impedit blanditiis soluta modi. Corporis corrupti iusto pariatur blanditiis veritatis sint, similique sequi natus!
              Neque cum id est pariatur itaque eveniet unde enim magni velit dolore ad, totam rerum dolorum voluptas distinctio laboriosam ex tempore. Nostrum commodi cumque adipisci ad, porro exercitationem voluptate alias?
              Exercitationem quam natus odio atque possimus nam fugit eveniet nostrum ea, itaque eaque maxime esse sapiente odit, autem labore. Explicabo vero quas debitis reiciendis vel nostrum esse? Quod, perspiciatis nobis?
              Placeat voluptatem alias, fuga doloremque ipsam quis laboriosam tenetur. Pariatur et perferendis quos, hic esse exercitationem ea rem quam non. Dolorem est tempore exercitationem. Soluta, molestiae reiciendis? Blanditiis, quisquam placeat.
              Temporibus adipisci voluptatum eius voluptates architecto quisquam consequatur veritatis repellat. Tempora nihil, non a earum laudantium nulla neque exercitationem ab necessitatibus maiores sapiente officiis eos eius unde. Quibusdam, deleniti architecto.
              Nam corrupti recusandae mollitia neque iste in asperiores perspiciatis aliquid quis, libero soluta quam incidunt assumenda fugiat temporibus ut at sint, eum illo! Amet dolores ipsam eaque distinctio numquam laboriosam!
              At reiciendis repellat expedita aut et nesciunt minus laborum exercitationem libero facere odio, minima praesentium voluptatibus. Animi molestias architecto quam, nam velit ipsum temporibus doloribus nulla, error iste fugiat quas.
              Quas sapiente iusto alias esse eaque ex quaerat dolorem molestiae! Nesciunt, similique nemo totam eveniet cumque vitae reiciendis ad aliquam necessitatibus consequuntur excepturi sit aperiam modi. Facilis velit eos odit!
              Et autem magnam ea deleniti similique, quas fugit, commodi aut hic dolorem eveniet reprehenderit officia, praesentium eaque rerum numquam? Cumque labore ex dolorem atque voluptas mollitia rem impedit autem consequuntur.
              Voluptatum maxime fugit dignissimos expedita quasi eos exercitationem quidem ipsum ex maiores nihil corrupti eius et, nam deleniti id. Inventore quasi velit sunt delectus possimus id quidem, odio ipsam perspiciatis!
              Sit id esse veniam labore repellat repudiandae eius optio officiis modi magnam vitae velit quibusdam distinctio quod cumque blanditiis debitis nesciunt dignissimos minus, dolor nemo! Cupiditate odit sunt sint repellat.
              Dolores, distinctio qui repellendus ipsam quaerat voluptate aperiam totam inventore consequatur, tenetur porro placeat dolore libero? Deserunt pariatur omnis eaque optio sequi, reiciendis tempore molestiae laborum facere recusandae cupiditate explicabo.
              Temporibus commodi, ullam, reiciendis veniam culpa earum iusto porro vel, vitae neque dignissimos voluptatum assumenda quia corporis perspiciatis dolorum quam consectetur. Accusamus ducimus similique reprehenderit. Inventore eius illum explicabo eos.
              Molestias veniam delectus doloremque quo ipsum corporis placeat expedita esse et minima ipsa id aliquam fugiat pariatur ipsam tenetur, ea vitae. Fuga officia dignissimos omnis iure obcaecati tempora quam non.
              At, dolorem, qui reiciendis officia saepe suscipit nostrum, delectus esse pariatur libero dolor accusantium eos. Eius cumque omnis repudiandae sit! Sint impedit earum, aut nihil voluptas quibusdam nisi ipsam! Aliquid!
              Veritatis dignissimos debitis, nulla minima architecto, nisi, assumenda animi molestias consequatur dolorem impedit? Illo architecto voluptas ullam corrupti vero, vel obcaecati veritatis? Eaque, atque? Ipsam adipisci recusandae laborum exercitationem iste.
              Deserunt non doloremque voluptatibus accusantium eius architecto molestias distinctio nemo, tenetur corporis unde dolorem nihil rem sequi fuga, nostrum iure quae fugit cupiditate doloribus rerum maxime, illum totam? Doloremque, praesentium.
              Aspernatur quos hic eveniet quod inventore necessitatibus ex! Mollitia quisquam, asperiores pariatur dignissimos temporibus laborum, eligendi excepturi recusandae at eaque expedita distinctio libero nam aspernatur veritatis, culpa veniam vel vitae.
              Iure autem quas ad illo ratione numquam tempore, nemo illum, repudiandae incidunt quidem temporibus! Mollitia temporibus enim praesentium aperiam expedita doloremque voluptate totam necessitatibus consequatur! Asperiores facilis laboriosam quasi iure!
              Architecto ad quo corrupti doloribus aspernatur iste voluptate quis nulla molestias sequi illum commodi, labore at tempore repellat quasi quae possimus earum, perferendis exercitationem. Dolor, voluptas est. Quisquam, consequatur? Incidunt?
              Reprehenderit nostrum ab, deserunt magnam accusamus consectetur enim voluptatum voluptate nisi quibusdam officia, doloremque esse eius laudantium, excepturi non! Voluptates, ipsa dolorem sed pariatur natus cupiditate illum temporibus perferendis magnam!
              Nobis ea magnam architecto odio eum velit totam eos temporibus necessitatibus accusantium dolores alias, nam similique. Voluptates, quisquam suscipit. Ea doloremque vitae fuga fugit? Architecto fugit illo ducimus molestias id.
              Necessitatibus cum tempora officiis! Odio ex eveniet eius similique veniam a animi natus quod, amet perspiciatis repellat molestias maiores corporis voluptates tenetur unde quo nostrum inventore maxime, asperiores aut odit.
              Voluptatibus consequatur id ad aspernatur repellendus accusantium tempore quam pariatur suscipit accusamus, qui animi repellat error, sint ea harum ex nisi deserunt porro maxime aut commodi. Non corporis repudiandae hic.
              Rem velit sed eum magni illum consectetur, rerum eaque officia quod sit quo quas labore. Cum eligendi, a quia delectus laudantium quasi, iste maiores pariatur exercitationem quo eum, dolor inventore.
              Debitis ipsam accusantium quo ab minus voluptatem qui eum expedita voluptas assumenda eligendi rerum repellat soluta ad velit doloremque porro, autem error ex quisquam esse ipsa quod. Animi, quas quasi!
            .</p>

            <SendMessage handlesubmitSendMessageForm={handlesubmitSendMessageForm}/>
        </section>
      </div>
    )
};

export default ChatScreen;