<script lang="ts">
import { Icon } from '@iconify/vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

const newMessage = document.querySelector('#qrgen')

console.log(newMessage)

export default {
    components: {
        VueQrcode
    },
    data() {
        return {
            message: newMessage,
        }
    }
}

</script>
<template>
    <div class="right-outer-wrapper">
        <div>
            <div class="top-info">
                <p class="top-tag">Request ID</p>
                <input v-model="message" id="qrgen" placeholder="# 00001" class="top-input" type="text">
                <Icon width="23" class="copy-icon" icon="fluent:copy-arrow-right-20-regular" /> 
            </div>
            <div class="top-info">
                <p class="top-tag">Expire by</p>
                <input class="top-input" type="date">
            </div>
            <div class="top-info">
                <p class="top-tag">Request saving data</p>
                <input type="checkbox">
            </div>
            <div class="top-info-info">
                <Icon class="right-icon" icon='bi:exclamation-circle' />
                <p class="info-description">Ask patient for data storage permission on your organiztion account</p>
            </div>
            <div class="top-info">
                <p class="top-tag">Delete data after</p>
                <input class="top-input" type="date">
            </div>
            <div class="top-info-info">
                <Icon class="right-icon" icon='bi:exclamation-circle' />
                <p class="info-description">User must be informed and allowed to request deletion anytime</p>
            </div>
        </div>
        <div class="right-bottom">
            <qrcode :value="message" :options="{ color: '#0275d8', width: 200, }"></qrcode>
            <!-- <img class="qrcode" src="../assets/qrcode.png" alt=""> -->
            <p class="qr-description">scan, share, or type in your browser</p>
            <p class="qr-subdescription">or wave the phone on terminal (NFC)</p>
            <a class="qrlink" href="">https://long.io/d1785e</a>
            <div style="width: 90%;" class="top-info">
                <p class="regenerate">Regenerate</p>
                <button class="copy-btn">Copy</button>
            </div>
        </div>
    </div>
</template>
<style>
.top-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    position: relative;
}

.copy-icon {
    position: absolute;
    right: 0.6rem;
    opacity: 0.6;
}

.calendar {
    position: absolute;
    right: 0.5rem;
    z-index: 1;
}

.qr-description {
    font-size: 20px;
    font-family: 'DM Sans';
    margin-block: 0;
    margin-top: 1rem;
}

.qr-subdescription {
    font-size: 12px;
    font-family: 'DM Sans';
    margin-block: 0;
    margin: 1rem 0;
}

.qrlink {
    background: rgba(54, 131, 252, 0.1);
    text-decoration: none;
    color: #3683fc;
    font-family: 'DM Mono';
    font-size: 22px;
    margin-bottom: 1rem;
    padding: 10px 20px;
    border-radius: 6px;
}

.top-info-info {
    display: flex;
    align-items: center;
    margin: 1rem;
    gap: 1rem;
    background-color: rgba(54, 131, 252, 0.1);
    margin-block: 0;
    border-radius: 15px;
    padding-left: 10px;
    font-family: 'DM Sans';
    border-left: 2px solid #3683fc;
}

.copy-btn {
    background-color: #3683fc;
    color: #fff;
    font-family: "DM Sans";
    padding: 5px 30px;
    border-radius: 30px;
    border-color: #3683fc;
    background: #3683fc;
    font-size: 20px;
    transition: all 0.3s;
}

.copy-btn:hover {
    transform: translateY(-5px);
    background: rgba(54, 131, 252, 0.1);
    color: #3683fc;
    cursor: pointer;
}

.regenerate {
    color: #3683fc;
    font-family: 'DM Sans';
    font-size: 18px;
    margin-block: 0;
}

.right-icon {
    color: #3683fc;
    margin-block: 0;
    width: 20px;
}

.info-description {
    margin-block: 0;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    transform: scale(1.2);
    margin-right: 5px;
    opacity: 0.6;
}

.top-input {
    width: 50%;
    background-color: rgba(54, 131, 252, 0.1);
    outline: none;
    border: none;
    margin-block: 0;
    padding: 5px;
    font-family: 'DM Sans';
    font-size: 18px;
    border-radius: 6px;
}

input[type=date] {
    font-weight: 600;
    opacity: 0.9;
}

input[type=text]::placeholder {
    color: #000;
    font-weight: 600;
    opacity: 0.9;
}

.top-tag {
    margin-block: 0;
    font-family: 'DM Sans';
    font-size: 18px;
}

.right-outer-wrapper {
    width: 400px;
}

.right-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem;
    background-color: rgba(54, 131, 252, 0.1);
    border-radius: 15px;
}

.qrcode {
    width: 250px;
    background-color: #fff;
}
</style>