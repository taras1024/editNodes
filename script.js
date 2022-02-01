const snippetMainContainer = document.createElement('div')
const snippetNavContainer = document.createElement('div')
const snippetUrlInput = document.createElement('input')
const snippetGoBtn = document.createElement('button')
const snippetPageView = document.createElement('iframe')
snippetPageView.id = "snippetIframe"


snippetMainContainer.style.cssText = `position: fixed; display:flex; align-items: center;
												 left: 0; top: 0; width:100%; height: 100%; flex-direction: column;
												 z-index: 999999; background-color: #121a23; `
snippetNavContainer.style.cssText = `width: 100%;  padding: 20px 5px; background-color: #0f0f0f; display: flex; justify-content: center;`

snippetUrlInput.style.cssText = `border-radius: 20px 0 0 20px; padding:  5px 20px; text-align: center; outline: none;
									 color: #fff; border: 1px solid #69aa00; background-color: #0f0f0f; width: 70%`


snippetUrlInput.style.cssText = `border-radius: 20px 0 0 20px; padding:  5px 20px; text-align: center; outline: none;
                                     color: #fff; border: 1px solid #69aa00; background-color: #0f0f0f; width: 70%`

snippetGoBtn.style.cssText = `border-radius: 0 20px 20px 0; padding:  5px 20px; text-align: center;
									 color: #fff; border: 1px solid #69aa00; background-color: #69aa00; outline: none;`

snippetPageView.style.cssText = `width:100%; height: calc(100% - 146px); `


snippetUrlInput.value = 'URL'
snippetGoBtn.innerHTML = 'RUN SCRIPT'


snippetNavContainer.append(snippetUrlInput)
snippetNavContainer.append(snippetGoBtn)
snippetMainContainer.append(snippetNavContainer)
snippetMainContainer.append(snippetPageView)

document.querySelector('body').appendChild(snippetMainContainer)

let baseURL = 'https://live-dig0030184-petcare-purinattt-spain.pantheonsite.io'


snippetPageView.setAttribute('src', `${baseURL}/admin/content`)
// snippetPageView.setAttribute('src', `https://uat-74995-petcare-purinattt-unitedkingdom.pantheonsite.io/admin/content`)



function changePage() {
    const url = snippetPageView.contentWindow.location.href
    snippetUrlInput.value = url
}

snippetGoBtn.addEventListener('click', () => {
    // startEditNodes()
})

count = 0

snippetPageView.addEventListener('load', function () {
    changePage()

    if (nodeIdArr1[count]) {
        if (snippetPageView.src.includes('edit')) {
            editNode()
            setTimeout(() => {
                console.log(`${count} FROM EVENT TIMEOUT`, snippetPageView.src.slice(snippetPageView.src.indexOf('node')))
                count++
                if (nodeIdArr1[count]) {
                    snippetPageView.src = `${baseURL}/node/${nodeIdArr1[count]}/edit`
                }
            }, 500)
            console.log('FROM EVENT', snippetPageView.src.slice(snippetPageView.src.indexOf('node')))
        } else {
            count++
            snippetPageView.src = `${baseURL}/node/${nodeIdArr1[count]}/edit`
        }
    }

})

// const nodeIdStr = `6001
// 5996
// 5296
// 5291`

// const nodeIdArr = nodeIdStr.split('\n')


let nodeIdStr1 = ``

// const nodeIdArr1 = nodeIdStr1.split('\n')


// snippetPageView.src = `https://live-dig0028577-petcare-purinattt-austria.pantheonsite.io/en/node/${nodeIdArr1[count]}/edit`

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