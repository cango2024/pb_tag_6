const warenkorb = ["apfel","banene","kirsche","orange"]

const kirsche = warenkorb.indexOf("kirsche");

if (kirsche !== -1) {
    console.log(`"Kirsche" ist im Warenkorb ${kirsche}.`);
} else {
    console.log(`"Kirsche" ist nicht im Warenkorb!`);
}




warenkorb.pop()
warenkorb.unshift("mango")
warenkorb.reverse()
warenkorb.splice(1,1,"wassermelone")

console.log(warenkorb)

