export function drawGalleryItem(item) {
    const itemElement = document.createElement('div')
    itemElement.classList = "gallery_item"
    let itemContentElement;
    let itemContentaudio;

    if (item.type == 'img') {
        itemContentElement = document.createElement('img')
        itemContentElement.classList = "gallery_item_img"

    }
    if (item.type == 'audio') {
        itemContentElement = document.createElement('div')
        itemContentElement.classList = "gallery_item_audio"
        itemContentaudio = document.createElement('audio')
        itemContentElement.appendChild(itemContentaudio)
    }
    if (item.type == 'video') {
        itemContentElement = document.createElement('video')
        itemContentElement.classList = "gallery_item_video"
    }

    if (item.type != 'audio') {
        itemContentElement.src = item.src;
    } else {
        itemContentaudio.src = item.src;
    }

    if (item.type == 'audio') {
        itemContentaudio.controls = true
    }
    if (item.type == 'video') {
        itemContentElement.controls = true
    }

    const itemHeadElement = document.createElement('p')
    itemHeadElement.classList = "gallery_item_head"
    itemHeadElement.textContent = item.head

    itemElement.appendChild(itemContentElement)
    itemElement.appendChild(itemHeadElement)

    return itemElement
}