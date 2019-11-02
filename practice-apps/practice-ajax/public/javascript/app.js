(function initIIFE() {
    let petsContainer = document.getElementById('petsContainer');

    petsContainer.addEventListener('click', function onClick(e) {
        if (e.target.tagName === 'BUTTON') {
            switch (e.target.dataset.type) {
                case 'edit':
                    swal({
                        title: 'Edit pet',
                        html: createPetCard(
                            {
                                name: 'Bob',
                                type: 'cat',
                                created: Date.now()
                            },
                            true
                        ),
                        confirmButtonText: 'Save',
                        showCancelButton: true,
                        cancelButtonText: 'Cancel',
                        width: '50%'
                    });
                    break;
                case 'delete':
                    break;
                default:
                    break;
            }
        }
    });

    petsContainer.appendChild(
        createPetCard({
            name: 'Dummy 1',
            type: 'cat',
            created: Date.now()
        })
    );
    petsContainer.appendChild(
        createPetCard({
            name: 'Dummy 2',
            type: 'dog',
            created: Date.now()
        })
    );
})();
