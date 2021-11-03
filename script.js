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



snippetPageView.setAttribute('src', `https://live-dig0028577-petcare-purinattt-austria.pantheonsite.io/admin/content`)



function changePage() {
	const url = snippetPageView.contentWindow.location.href
	snippetUrl.value = url
}

snippetPageView.addEventListener('load', async () => {
	changePage()

    const buyNowFusepump = snippetPageView.contentWindow.document.getElementById('edit-field-product-fusepump-wrapper')
    const buyNowLink = snippetPageView.contentWindow.document.getElementById('edit-field-product-buy-link-wrapper')

    snippetPageView.contentWindow.document.querySelector('.horizontal-tab-button-0 a').click()

    
    buyNowFusepump ? await editInput(buyNowFusepump) : console.log('Fusepump absent')
    buyNowLink ? await editInput(buyNowFusepump) : console.log('Buy now link absent')
    
    // await editInput(snippetPageView.contentWindow.document.getElementById(fields[0].selector))
    // await editInput(snippetPageView.contentWindow.document.getElementById(fields[1].selector))
})

snippetGoBtn.addEventListener('click', () => {
    startEditNodes()
})

const nodeIdStr = `4061
4066
4071
4076
4116
4121
4126
4136
4141
4146
4151
4156
4161
4166
4171
4181
4191
4196
4206
4211
4216
4221
4226
4231
4241
4246
4251
4256
4261
4266
4271
4276
4281
4286
4291
4296
4306
4316
4321
4326
4331
4336
4351
4356
4361
4366
4371
4376
4381
4391
4396
4401
4411
4416
4421
4426
4436
4441
4446
4451
4456
4461
4466
4471
4601
4676
4701
4711
4721
4766
4786
4796
4826
4846
4851
4856
4861
4866
4876
4881
4891
5031
5056
5066
5076
5131
5141
5151
5166
5181
5191
5196
5206
5221
5246
5251
5261
5266
5291
5296
5326
5346
5356
5366
5371
5381
5391
5401
5431
5726
5731
5736
5741
5746
5751
5756
5761
5766
5771
5776
5791
5806
5846
5866
5956
5961
5966
5971
5976
5981
5986
6066
6071
6076
6081
6091
6096
6101
6116
6131
6136
6141
6146
6151
6156
9713
9716
9737
9802
9803
9804
9805
9806
9807
9808
9809
9810
9811
9812
9813
9814
9815
9816
9818
9819
9825
9826
9827
9828
9829
9830
9831
9832
9833
9834
9835
9836
9837
9838
9839
9840
9841
9842
9843
9844
9845
9846
9847
9848
9849
9850
9851
9852
9853
9854
9855
9856
9857
9858
9859
9860
9861
9862
9863
9864
9865
9866
9867
9868
9869
9870
9872
9873
9874
9905
9906
9907
9908
9909
9910
9911
9912
9913
9914
9915
9916
9917
9922
9923
9925
9926
9927
9928
9929
9930
9931
9932
9933
9934
9935
9939
9940
9941
9942
9943
9944
9946
9947
9948
9949
9950
9951
9952
9953
9954
9955
9957
9958
9960
9961
9962
9963
9964
9965
9966
9967
9968
9969
9970
9971
9972
9973
9974
9975
9976
9977
9978
9980
9987
9988
9989
9990
9991
9992
9993
9994
9995
9996
9997
9998
9999
10000
10001
10002
10003
10004
10005
10006
10007
10008
10009
10010
10011
10012
10013
10014
10015
10016
10017
10018
10054
10055
10058
10059
10060
10061
10062
10092
10096
10097
10098
10099
10235
10236
10239
10240
10249
10250
10251
10252
10253
10254
10255
10256
10257
10258
10259
10260
10261
10262
10263
10264
10265
10266
10267
10268
10269
10270
10271
10272
10273
10274
10275
10276
10277
10278
10279
10280
10281
10282
10283
10284
10285
10286
10287
10288
10289
10290
10291
10292
10293
10294
10295
10296
10298
10299
10300
10301
10302
10303
10304
10305
10306
10307`

const nodeIdArr = nodeIdStr.split('\n')

// const fields = [
//     {name:"buyNowFusepump",selector:"edit-field-product-fusepump-wrapper"},
//     {name:"buyNowLink",selector:"edit-field-product-buy-link-wrapper"}
// ]



async function startEditNodes () {
    let nodeLink = ''
    for(let i = 0; i < 2; i++) {
        nodeLink = `https://live-dig0028577-petcare-purinattt-austria.pantheonsite.io/node/${nodeIdArr[i]}/edit`
        snippetPageView.contentWindow.location.href = nodeLink 
        snippetPageView.onload = () => {
            console.log (i, nodeIdArr[i])
           await setTimeout(() => console.log('3sec'), 3000)
        }   
        // await editNode(nodeLink)
    }

}

async function editNode (link) {
    console.log(`nodeLink: ${link}`)

}


async function editInput(node) {
	const nodeInput = node.querySelector('input')
	nodeInput.value = ''
}