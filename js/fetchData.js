document.addEventListener('DOMContentLoaded', () => {

const fetchEventList = async () => {
    try {
        const response = await fetch("http://localhost:3029/api/event");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        const eventCarousel = document.getElementById("eventCarousel");

        let events = "";
        data.events.forEach(event => {
            events += `<div class="team-item">
                    <img class="img-fluid w-100" src="http://localhost:3029/images/${event.eventImage}" alt="" style="height: 300px;">
                    <div class="bg-light text-center p-4">
                        <h5 class="mb-3">${event.eventTitle}</h5>
                        <p class="mb-2">${event.eventDescription}</p>
                    </div>
                </div>`;
        });

        eventCarousel.innerHTML = events; // Use innerHTML instead of innerText
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

const fetchNoticeList = async () => {
    try {
        const response = await fetch("http://localhost:3029/api/notice");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        const noticeCarousel = document.getElementById("noticeCarousel");

        let notices = "";
        data.notices.forEach(notice => {
            notices += `
                <div class="bg-white p-5">
                            <i class="fa fa-3x fa-quote-left text-primary mb-3"></i>
                            <div class="d-flex flex-shrink-0 align-items-center">
                                <!-- <img class="img-fluid mr-4" src="img/testimonial-1.jpg" alt=""> -->
                                <div>
                                    <h5>${notice.noticeTitle}</h5>
                                    <!-- <span>Web Design</span> -->
                                </div>
                            </div>
                            <p>${notice.noticeDescription}</p>
                        </div>
            `
        });

        noticeCarousel.innerHTML = notices; // Use innerHTML instead of innerText
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchEventList();
fetchNoticeList();
})