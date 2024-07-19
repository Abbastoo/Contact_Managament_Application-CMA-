document.getElementById('contact-form').addEventListener('submit',function(event)
{
    event.preventDefault(); 
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email= document.getElementById('email-id').value;
    const contactNumber = document.getElementById('contact-number').value;
    const contactList = document.getElementById('contact-list');
    const listitem= document.createElement('li');
    listitem.textContent= `${firstName } ${lastName} ${email} ${contactNumber}`;
    contactList.appendChild(listitem);
    document.getElementById('contact-form').reset();
    });
