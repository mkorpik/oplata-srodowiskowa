<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Mobile
 * @ApiResource(attributes={"filters"={"mobile.search_filter"}})
 * @ORM\Table(name="mobile", indexes={@ORM\Index(name="IDX_3C7323E0979B1AD6", columns={"company_id"}), @ORM\Index(name="IDX_3C7323E0E78C9C0A", columns={"engine_id"})})
 * @ORM\Entity
 */
class Mobile
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="registration_number", type="string", length=9, nullable=true)
     */
    private $registrationNumber;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_date", type="date", nullable=true)
     */
    private $startDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="end_date", type="date", nullable=true)
     */
    private $endDate;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="mobile_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\Company
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Company")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="company_id", referencedColumnName="id")
     * })
     */
    private $company;

    /**
     * @var integer
     *
     * @ORM\Column(name="engine_id", type="integer", nullable=false)
     */
    private $engineId;

    /**
     * @var fuels
     * @ORM\ManyToMany(targetEntity="MobileFuel")
     * @ORM\JoinTable(name="mobile_fuel_to_mobile",
     *      joinColumns={@ORM\JoinColumn(name="mobile_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="fuel_id", referencedColumnName="id", unique=true)}
     *      )
     */
    private $fuels;

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getRegistrationNumber()
    {
        return $this->registrationNumber;
    }

    /**
     * @param string $registrationNumber
     */
    public function setRegistrationNumber($registrationNumber)
    {
        $this->registrationNumber = $registrationNumber;
    }

    /**
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * @param \DateTime $startDate
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;
    }

    /**
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * @param \DateTime $endDate
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return Company
     */
    public function getCompany()
    {
        return $this->company;
    }

    /**
     * @param Company $company
     */
    public function setCompany($company)
    {
        $this->company = $company;
    }

    /**
     * @return int
     */
    public function getEngineId()
    {
        return $this->engineId;
    }

    /**
     * @param int $engineId
     */
    public function setEngineId($engineId)
    {
        $this->engineId = $engineId;
    }

    /**
     * @return fuels
     */
    public function getFuels()
    {
        return $this->fuels;
    }

    /**
     * @param fuels $fuels
     */
    public function setFuels($fuels)
    {
        $this->fuels = $fuels;
    }

}

