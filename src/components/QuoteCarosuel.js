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
																		Ce fut un réel plaisir de travailler avec Wolf et toute l’équipe de Le Loup. Nous sommes ravis du résultat de
																		notre rénovation sous leur supervision. Toute l’équipe a été professionnelle, organisée, ponctuelle, agréable
																		et compétente. Ils ont compris et livré exactement ce que nous voulions. Nous travaillerons certainement avec
																		eux à nouveau!
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
																		Nous ne pourrions être plus satisfaits du travail effectué par Gestion Le Loup! Leur souci du détail et leur
																		savoir-faire ont transformé notre maison au-delà de nos attentes. L’équipe a été professionnelle, ponctuelle
																		et communicative tout au long du processus. Hautement recommandé pour quiconque souhaite rénover sa maison.
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
																		Travailler avec Gestion Le Loup pour la rénovation de notre sous-sol a été un véritable plaisir. Leur souci
																		du détail, leur professionnalisme et leur engagement envers un travail de qualité ont dépassé nos attentes.
																		Nous sommes ravis du résultat final – un espace magnifiquement transformé qui correspond parfaitement à notre
																		vision. Je recommande fortement Gestion Le Loup pour tout projet de rénovation domiciliaire.
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
																		Nous avons travaillé avec Gestion LeLoup au printemps 2021 pour rénover notre sous-sol. Ils ont fait un
																		excellent travail, le sous-sol a été magnifiquement fini en temps opportun. Wolf était super à travailler,
																		consciencieux, efficace et honnête. 10/10, je recommande!
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
																		Je recommande fortement de faire affaire avec Gestion LeLoup pour tout projet de rénovation ou de
																		construction. J’ai engagé Wolfgang et son équipe pour une importante rénovation de sous-sol et la
																		reconstruction d’un balcon, et j’ai été ravie du résultat final à chaque fois. Wolf se fixe des normes très
																		élevées en matière de savoir-faire, de matériaux, de sécurité et d’esthétique du produit fini. Les projets
																		étaient bien conçus et j’ai été consultée tout au long des travaux pour toute modification ou complication
																		imprévue. Son équipe de constructeurs, de charpentiers et de professionnels du métier est professionnelle,
																		respectueuse et sympathique.{' '}
																	</span>
																</p>
															</MDBTypography>
															<figcaption className='blockquote-footer mb-0'>Mellisa</figcaption>
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
