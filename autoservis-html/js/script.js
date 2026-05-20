 // DAN 5 - Promjena teksta
        const button = document.getElementById('changeTextBtn');
        const text = document.getElementById('dynamicText');

        button.addEventListener('click', function () {
            text.textContent = 'Hvala na kliku! Vaše vozilo je u sigurnim rukama.';
        });

        // DAN 6 - Hardcoded podaci
        const services = [
            {
                name: 'Mali servis',
                image: 'images/photo1.jpg',
                description: 'Zamjena ulja, filtera i osnovna provjera vozila.'
            },
            {
                name: 'Veliki servis',
                image: 'images/velikiservis.jpg',
                description: 'Kompletna zamjena remenja, pumpi i svih potrošnih dijelova.'
            },
            {
                name: 'Dijagnostika',
                image: 'images/dijagnostika.jpg',
                description: 'Napredna računalna dijagnostika svih sustava vozila.'
            }
        ];

        const container = document.getElementById('serviceCards');

        services.forEach(service => {
            container.innerHTML += `
                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <img src="${service.image}" class="card-img-top" alt="${service.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${service.name}</h5>
                            <button class="btn btn-primary"
                                onclick="showDetails('${service.name}', '${service.description}')">
                                Detalji
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        function showDetails(title, description) {
            document.getElementById('detailTitle').textContent = title;
            document.getElementById('detailDescription').textContent = description;
            document.getElementById('details').classList.remove('hidden');

            document.getElementById('details').scrollIntoView({
                behavior: 'smooth'
            });
        }

        function hideDetails() {
            document.getElementById('details').classList.add('hidden');
        }