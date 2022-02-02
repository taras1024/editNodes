const bodyNode = document.querySelector('body')

const snippetMainContainer = document.createElement('div')
const snippetControlContainer = document.createElement('div')
const snippetControlLeftSide = document.createElement('div')
const snippetControlRightSide = document.createElement('div')
const snippetInput = document.createElement('TEXTAREA')
const snippetBtnContainer = document.createElement('div')
// const snippetAddCustomBtn = document.createElement('button')
const snippetRunBtn = document.createElement('button')
const snippetGoBtn = document.createElement('button')

const snippetLoaderContainer = document.createElement('div')

const snippetPageView = document.createElement('iframe')
const snippetNavContainer = document.createElement('div')
const snippetUrlInput = document.createElement('input')



const snippetBtnStyle =
    'outline: none; border: 0; border-radius: 20px; padding: 10px 20px; cursor:pointer; color: white; margin: 0 5px; line-height: 10px; outline: none;'


// snippetAddCustomBtn.id = 'snippetAddCustomBtn'
// snippetAddCustomBtn.innerHTML = 'Add custom'
// snippetAddCustomBtn.style.cssText = `background-color: #69aa00; ${snippetBtnStyle}`

snippetRunBtn.id = 'snippetRunBtn'
snippetRunBtn.innerHTML = 'RUN'
snippetRunBtn.style.cssText = `background-color: red; ${snippetBtnStyle}`

snippetInput.placeholder = 'Insert nodes IDs here...'

snippetBtnContainer.style.cssText = `padding: 0 10px; display:flex; justify-content:space-between`

snippetMainContainer.style.cssText = `position: fixed; display:flex; align-items: center;
												 left: 0; top: 0; width:100%; height: 100%; flex-direction: column;
												 z-index: 999999; background-color: #121a23; `

snippetControlContainer.style.cssText = `width:100%; height:220px; display:flex; padding: 0 5px`

snippetControlLeftSide.style.cssText = `display: flex; justify-content: center; align-items: center; padding: 7px 0;`

snippetPageView.style.cssText = `width:100%; height: calc(100% - 146px); `

snippetNavContainer.style.cssText = `width: 100%;  padding: 20px 5px; background-color: #0f0f0f; display: flex; justify-content: center;`

snippetUrlInput.style.cssText = `border-radius: 20px 0 0 20px; padding:  10px 20px; text-align: center; outline: none;
									 color: #fff; border: 1px solid #69aa00; background-color: #0f0f0f; width: 70%`

snippetGoBtn.style.cssText = `border-radius: 0 20px 20px 0; padding: 5px 20px; cursor: auto; text-align: center;
									 color: #fff; border: 1px solid #69aa00; background-color: #69aa00; outline: none;`

snippetInput.style.cssText = `width: 400px; height: 200px; border-radius:  20px; resize: none; padding: 4px 10px; outline: none; background-color: #0f0f0f;
										 border: 1px solid #00385a; color: #fff;`


snippetPageView.id = "snippetIframe"

snippetUrlInput.value = 'Insert WebSite base URL here...'
snippetGoBtn.innerHTML = 'GO'

snippetControlContainer.append(snippetControlLeftSide)
snippetControlContainer.append(snippetControlRightSide)

snippetControlLeftSide.append(snippetInput, snippetBtnContainer)
snippetBtnContainer.append(
    // snippetAddCustomBtn,
    snippetRunBtn
)

snippetNavContainer.append(snippetUrlInput)
snippetNavContainer.append(snippetGoBtn)
// snippetLoaderContainer.append(snippetLoader)
// snippetLoaderContainer.append(snippetLoaderMessage)

snippetMainContainer.append(snippetControlContainer)
snippetMainContainer.append(snippetNavContainer)
// snippetMainContainer.append(snippetLoaderContainer)
snippetMainContainer.append(snippetPageView)

bodyNode.append(snippetMainContainer)



let baseURL = 'https://live-dig0030184-petcare-purinattt-spain.pantheonsite.io'
let nodeIdStr = ``
let nodeIdArr = nodeIdStr.split('\n')
let count = 0


function changePage() {
    const url = snippetPageView.contentWindow.location.href
    snippetUrlInput.value = url
}


snippetRunBtn.addEventListener('click', () => {
    count = 0
    baseURL = snippetUrlInput.value

    nodeIdStr = snippetInput.value
    nodeIdArr = nodeIdStr.split('\n')

    snippetPageView.setAttribute('src', `${baseURL}/admin/content`)
})


snippetPageView.addEventListener('load', function () {
    changePage()

    if (nodeIdArr[count]) {
        if (snippetPageView.src.includes('edit')) {
            editNode()
            setTimeout(() => {
                // console.log(`${count} FROM EVENT TIMEOUT`, snippetPageView.src.slice(snippetPageView.src.indexOf('node')))
                count++
                if (nodeIdArr[count]) {
                    snippetPageView.src = `${baseURL}/node/${nodeIdArr[count]}/edit`
                }
            }, 500)
            // console.log('FROM EVENT', snippetPageView.src.slice(snippetPageView.src.indexOf('node')))
        } else {
            // count++
            snippetPageView.src = `${baseURL}/node/${nodeIdArr[count]}/edit`
        }
    }

})



function editNode() {
    const buyNowFusepump = snippetPageView.contentWindow.document.getElementById('edit-field-product-fusepump-0-value')
    const buyNowLink = snippetPageView.contentWindow.document.getElementById('edit-field-product-buy-link-0-uri')
    const bvID = snippetPageView.contentWindow.document.getElementById('edit-field-product-bv-id-0-value')

    const generalTab = snippetPageView.contentWindow.document.querySelector('.horizontal-tab-button-0 a')
    const relatedProdTab = snippetPageView.contentWindow.document.querySelector('.horizontal-tab-button-4 a')

    const relatedProd1 = snippetPageView.contentWindow.document.getElementById('edit-field-product-related-products-0-target-id')
    const relatedProd2 = snippetPageView.contentWindow.document.getElementById('edit-field-product-related-products-1-target-id')
    const relatedProd3 = snippetPageView.contentWindow.document.getElementById('edit-field-product-related-products-2-target-id')
    const relatedProd4 = snippetPageView.contentWindow.document.getElementById('edit-field-product-related-products-3-target-id')

    const saveBtn = snippetPageView.contentWindow.document.getElementById('edit-submit')

    if (generalTab) {
        generalTab.click()
    }

    snippetPageView.contentWindow.scrollTo(0, 500)

    buyNowFusepump ? buyNowFusepump.value = '' : console.log('Fusepump absent')
    buyNowLink ? buyNowLink.value = '' : console.log('Buy now link absent')
    bvID ? bvID.value = '' : console.log('bvID absent')

    //     if(relatedProdTab) {
    //         relatedProdTab.click()
    //     }

    // relatedProd1 ? relatedProd1.value = '' : console.log('relatedProd1 absent')
    // relatedProd2 ? relatedProd2.value = '' : console.log('relatedProd2 absent')
    // relatedProd3 ? relatedProd3.value = '' : console.log('relatedProd3 absent')
    // relatedProd4 ? relatedProd4.value = '' : console.log('relatedProd4 absent')

    snippetPageView.contentWindow.confirm = function () { return true; }
    window.confirm = function () { return true; }

    saveBtn ? saveBtn.click() : console.log('saveBtn absent')
}