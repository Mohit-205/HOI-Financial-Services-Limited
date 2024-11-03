import React from 'react';
import Navbarothers from '../../Homepage/Navbarothers';


export default function Carpolicydetail() {
  return (
    <>
    <Navbarothers></Navbarothers>
    <div class="bg-light">
        <div class="container py-5"><h3>How can I change details in my car policy?</h3>
            <div class="row h-100 align-items-center py-5">
                <div class="col-lg-12">
                <p class="fs-6">Please login to the website. On your policy card, please click 'View Details'. You will be redirected to the policy details page where you will see an 'Edit Policy' button. Once you click on the button, a new pop-up will open with all the possible changes you can make in the policy. Select the type of change and provide the new details. Click submit. Post submitting, the new policy copy with the updated details will be generated.

For changes such as Name, few documents might be required for us to validate the new details. Once the documents are provided by you, our helpdesk would review and approve the documents and the new policy copy with the updated details will be generated.

For changes such as IDV, addition of a new cover, etc., the premium gets re-calculated and you might need to make an additional payment or be eligible for refund or there might be no change at all. Post the payment, if any, the new policy copy with the updated details will be generated.</p>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
