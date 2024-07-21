import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBCarousel, MDBCarouselItem, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function QuoteCarosuel() {
	return (
		<section className='gradient-custom h-100'>
			<MDBContainer className='py-5 h-100'>
				<MDBRow className='justify-content-center align-items-center h-100'>
					<MDBCol xl='10'>
						<MDBCard>
							<MDBCardBody className='py-5'>
								<MDBCarousel
									showControls
									dark
									pause
								>
									{/* <MDBCarouselItem
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
																		I highly recommend working with Gestion LeLoup for any renovation or building project. I've hired Wolfgang
																		and his team to do both a major basement renovation and a balcony rebuild, and both times I was thrilled with
																		the final result. Wolf holds himself to a very high standard of craftsmanship, materials, safety standards,
																		as well as the beauty of the finished product. The projects were well thought-out, and I was consulted
																		throughout the construction period about any modifications or unforeseen complications that arose. His team
																		of builders, carpenters and tradesmen are professional, respectful and friendly.
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>Melissa</figcaption>
														</figure>
													</div>
												</div>
											</MDBCol>
										</MDBRow>
									</MDBCarouselItem> */}

									<MDBCarouselItem tag='div'>
										<MDBRow className='justify-content-center'>
											<MDBCol
												md='8'
												lg='9'
												xl='8'
											>
												<div className='d-flex'>
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
																		It was a genuine pleasure to work with Wolf and the entire Le Loup team. We are thrilled with the way our
																		renovation turned out under their care. The entire team was professional, organized, timely, pleasant and
																		knowledgeable. They understood and delivered exactly what we wanted, we will certainly work with them again!
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>
																Allison Cunningham <cite title='Source Title'>co-founder Restaurant Joe Beef</cite>
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
																		We couldn't be happier with the work done by Gestion Le Loup! Their attention to detail and craftsmanship
																		transformed our house beyond our expectations. The team was professional, punctual, and communicative
																		throughout the entire process. Highly recommend for anyone looking to renovate their home
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>Ryan and Chelsea</figcaption>
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
																		Working with Gestion Le Loup on our basement renovation was an absolute pleasure. Their attention to detail,
																		professionalism, and commitment to quality craftsmanship exceeded our expectations. We are thrilled with the
																		final result—a beautifully transformed space that perfectly aligns with our vision. I highly recommend
																		Gestion Le Loup for any home renovation project.
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>Stephen</figcaption>
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
																		We worked with Gestion Leloup in the Spring of 2021 to renovate our basement. They did a great job, the
																		basement was beautifully finished in a timely manner. Wolf was great to work with, conscientious , efficient
																		and honest. 10/10 would recommend!
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>Carina and James</figcaption>
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
