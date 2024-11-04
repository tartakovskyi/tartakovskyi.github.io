const canvas = document.getElementById('canvas')
const canvasWidth = canvas.clientWidth

const skier = document.getElementById('skier')
const skierBottom = skier.offsetTop+ skier.clientHeight
const skierWidth = skier.clientWidth

const gateWidth = 250

const numberOfGates = 15

let finish

let direct = null

let gatesObj= {}

const btns = document.getElementsByClassName('arrow')

for (let btn of btns) {
    btn.addEventListener('touchstart', e => {
        e.preventDefault()
        if (direct != btn.id) {
            direct = btn.id
            turnSkierBg()
        }
        turn()
    })
    
    btn.addEventListener('touchend', e => {
        if (e.touches.length === 0) direct = null
    })
} 

renderGates()

const letsStart = confirm('Стартуємо?')
if (letsStart) race() 




function renderGates () {
    let vPos = 150
    let hPos = canvasWidth / 2 - gateWidth / 2

    for (let i = 1; i <= numberOfGates; i++) {
        vPos += 200

        const hPosMin = (hPos <= gateWidth + 10) ? 10: (hPos - gateWidth)
        const hPosMax = (hPos >= canvasWidth - gateWidth*2) ? (canvasWidth - gateWidth - 10): (hPos + gateWidth)
        
        hPos = randomInteger(hPosMin, hPosMax)

        createGate(vPos, hPos)
        
        gatesObj[vPos] = hPos
        
        if (i == numberOfGates) {
            finish = vPos + 100
            document.getElementById('finish').style.top = finish + 'px'

            skier.style.left = canvasWidth / 2 - skierWidth / 2
        }
    }
}

function createGate (vPos, hPos) {
    const gate = document.createElement('div')
    gate.className = 'gate'
    gate.id = vPos
    gate.style.top = vPos + 'px'
    gate.style.left = hPos + 'px'
    gate.style.width = gateWidth + 'px'
    canvas.append(gate)
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

async function race () {
    let skierVertPos
    while (window.scrollY <= finish) {
        await new Promise((resolve, reject) => setTimeout(resolve, 20));

        window.scrollBy(0, 1)
        
        skierVertPos = Math.round(window.scrollY) + skierBottom
        
        if (gatesObj[skierVertPos]) {
            checkHorizon(gatesObj[skierVertPos])
        }
    }
    if (window.scrollY >= finish) {
        const winSound = document.getElementById('winSound')
        winSound.play()
        alert('Перемога!')
    }
}

function turnSkierBg() {
    skier.style.transform = (direct == 'left') ? 'rotateY(180deg)' : 'initial'
}

async function turn () {
    const maxRight = canvasWidth - skier.width
    
    while(direct) {
        await new Promise((resolve, reject) => setTimeout(resolve, 20));
        
        let skierPos = parseInt(skier.style.left)
        
        switch (direct) {
            case 'left':
                if (skierPos <= 0) {
                    changeSkierPos(0)
                    direct = null
                } else {
                    changeSkierPos(skierPos - 1)
                }
                break;
            
            case 'right':
                if (skierPos >= maxRight) {
                    changeSkierPos(maxRight)
                    direct = null
                } else {
                    changeSkierPos(skierPos + 1)
                }
        } 
    }
}

function changeSkierPos (num) {
    skier.style.left = num + 'px'
}

function checkHorizon (gateLeftSide) {
    const skierLeftSide = parseInt(skier.style.left)
    const skierRightSide = skierLeftSide + skierWidth
    const gateRightSide = gateLeftSide + gateWidth
    
    if (skierLeftSide < gateLeftSide || skierRightSide >  gateRightSide) {
        alert('упс')
    }
}
