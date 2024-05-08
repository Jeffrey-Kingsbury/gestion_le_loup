import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBCarousel, MDBCarouselItem, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function QuoteCarosuel() {
	return (
		<section className='gradient-custom'>
			<MDBContainer className='py-5 h-100'>
				<MDBRow className='justify-content-center align-items-center h-100'>
					<MDBCol xl='10'>
						<MDBCard>
							<MDBCardBody className='py-5'>
								<MDBCarousel
									showControls
									dark
								>
									<MDBCarouselItem
										className='active'
										tag='div'
									>
										<MDBRow className='justify-content-center'>
											<MDBCol
												md='8'
												lg='9'
												xl='8'
											>
												<div className='d-flex'>
													<div className='flex-shrink-0'>
														<img
															src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'
															className='rounded-circle mb-4 mb-lg-0 shadow-2'
															alt='woman avatar'
															width='90'
															height='90'
														/>
													</div>
													<div className='flex-grow-1 ms-4 ps-3'>
														<figure>
															<MDBTypography
																blockquote
																className='mb-4'
															>
																<p>
																	<MDBIcon
																		fas
																		icon='quote-left fa-lg text-warning me-2'
																	/>
																	<span className='font-italic'>
																		Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint nesciunt ad itaque aperiam expedita
																		officiis incidunt minus facere, molestias quisquam impedit inventore.
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>
																Miranda Smith in <cite title='Source Title'>The Guardian</cite>
															</figcaption>
														</figure>
													</div>
												</div>
											</MDBCol>
										</MDBRow>
									</MDBCarouselItem>

									<MDBCarouselItem tag='div'>
										<MDBRow className='justify-content-center'>
											<MDBCol
												md='8'
												lg='9'
												xl='8'
											>
												<div className='d-flex'>
													<div className='flex-shrink-0'>
														<img
															src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp'
															className='rounded-circle mb-4 mb-lg-0 shadow-2'
															alt='woman avatar'
															width='90'
															height='90'
														/>
													</div>
													<div className='flex-grow-1 ms-4 ps-3'>
														<figure>
															<MDBTypography
																blockquote
																className='mb-4'
															>
																<p>
																	<MDBIcon
																		fas
																		icon='quote-left fa-lg text-warning me-2'
																	/>
																	<span className='font-italic'>
																		Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
																		aperiam, eaque ipsa quae ab illo inventore veritatis.
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>
																Annie Hall <cite title='Source Title'>New York Times</cite>
															</figcaption>
														</figure>
													</div>
												</div>
											</MDBCol>
										</MDBRow>
									</MDBCarouselItem>

									<MDBCarouselItem tag='div'>
										<MDBRow className='justify-content-center'>
											<MDBCol
												md='8'
												lg='9'
												xl='8'
											>
												<div className='d-flex'>
													<div className='flex-shrink-0'>
														<img
															src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp'
															className='rounded-circle mb-4 mb-lg-0 shadow-2'
															alt='woman avatar'
															width='90'
															height='90'
														/>
													</div>
													<div className='flex-grow-1 ms-4 ps-3'>
														<figure>
															<MDBTypography
																blockquote
																className='mb-4'
															>
																<p>
																	<MDBIcon
																		fas
																		icon='quote-left fa-lg text-warning me-2'
																	/>
																	<span className='font-italic'>
																		At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque
																		corrupti quos dolores et quas molestias excepturi sint amet dolore.
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>
																Jason More in <cite title='Source Title'>Smash Magazine</cite>
															</figcaption>
														</figure>
													</div>
												</div>
											</MDBCol>
										</MDBRow>
									</MDBCarouselItem>
								</MDBCarousel>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	);
}
