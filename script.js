const snippetMainContainer = document.createElement('div')
const snippetNavContainer = document.createElement('div')
const snippetUrl = document.createElement('input')
const snippetGoBtn = document.createElement('button')
const snippetPageView = document.createElement('iframe')
snippetPageView.id = "snippetIframe"


snippetMainContainer.style.cssText = `position: fixed; display:flex; align-items: center;
												 left: 0; top: 0; width:100%; height: 100%; flex-direction: column;
												 z-index: 999999; background-color: #121a23; `
snippetNavContainer.style.cssText = `width: 100%;  padding: 20px 5px; background-color: #0f0f0f; display: flex; justify-content: center;`

snippetUrl.style.cssText = `border-radius: 20px 0 0 20px; padding:  5px 20px; text-align: center; outline: none;
									 color: #fff; border: 1px solid #69aa00; background-color: #0f0f0f; width: 70%`


snippetUrl.style.cssText = `border-radius: 20px 0 0 20px; padding:  5px 20px; text-align: center; outline: none;
                                     color: #fff; border: 1px solid #69aa00; background-color: #0f0f0f; width: 70%`
 
snippetGoBtn.style.cssText = `border-radius: 0 20px 20px 0; padding:  5px 20px; text-align: center;
									 color: #fff; border: 1px solid #69aa00; background-color: #69aa00; outline: none;`

snippetPageView.style.cssText = `width:100%; height: calc(100% - 146px); `


snippetUrl.value = 'URL'
snippetGoBtn.innerHTML = 'RUN SCRIPT'


snippetNavContainer.append(snippetUrl)
snippetNavContainer.append(snippetGoBtn)
snippetMainContainer.append(snippetNavContainer)
snippetMainContainer.append(snippetPageView)

document.querySelector('body').appendChild(snippetMainContainer)



// snippetPageView.setAttribute('src', `https://live-dig0028577-petcare-purinattt-austria.pantheonsite.io/admin/content`)
snippetPageView.setAttribute('src', `https://uat-74995-petcare-purinattt-unitedkingdom.pantheonsite.io/admin/content`)



function changePage() {
	const url = snippetPageView.contentWindow.location.href
	snippetUrl.value = url
}

// snippetPageView.addEventListener('load', async () => {
// 	changePage()
    
//     // await editInput(snippetPageView.contentWindow.document.getElementById(fields[0].selector))
//     // await editInput(snippetPageView.contentWindow.document.getElementById(fields[1].selector))
// })

snippetGoBtn.addEventListener('click', () => {
    startEditNodes()
})

const nodeIdStr = `6001
5996
5296
5291`


const nodeIdArr = nodeIdStr.split('\n')

// const fields = [
//     {name:"buyNowFusepump",selector:"edit-field-product-fusepump-wrapper"},
//     {name:"buyNowLink",selector:"edit-field-product-buy-link-wrapper"}
// ]



async function startEditNodes () {
    let nodeLink = ''
    for(let i = 0; i < 3; i++) {
        nodeLink = `https://uat-74995-petcare-purinattt-unitedkingdom.pantheonsite.io/node/${nodeIdArr[i]}/edit`
        // snippetPageView.onload = async () => {
        //     console.log (i, nodeIdArr[i])
        //     await editNode()
        // }   
        snippetPageView.contentWindow.location.href = nodeLink 
    	snippetUrl.value = nodeLink

        await editNode()
        
    }
}

async function editNode () {
    // console.log(`nodeLink: ${link}`)

    setTimeout(() => {
        console.log(snippetPageView.contentWindow.location.href)
    }, 3000);
    const buyNowFusepump = snippetPageView.contentWindow.document.getElementById('edit-field-product-fusepump-wrapper')
    const buyNowLink = snippetPageView.contentWindow.document.getElementById('edit-field-product-buy-link-wrapper')
    const firstTab = snippetPageView.contentWindow.document.querySelector('.horizontal-tab-button-0 a')
    const saveBtn = snippetPageView.contentWindow.document.getElementById('edit-submit')

    if(firstTab) {
        firstTab.click()
    }

    snippetPageView.contentWindow.scrollTo(0,600)
    
    buyNowFusepump ? await editInput(buyNowFusepump) : console.log('Fusepump absent')
    buyNowLink ? await editInput(buyNowFusepump) : console.log('Buy now link absent')
    saveBtn ? saveBtn.click() : console.log('saveBtn absent')
}


async function editInput(node) {
	const nodeInput = node.querySelector('input')
	nodeInput.value = nodeInput.value + 'E'
}